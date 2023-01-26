const { default: fetch } = require("node-fetch");
const httpUtil = require("../common/util/HttpUtil");
const https = require("https");

class ByService {

    constructor(baseUrl, token, context) {
        this.baseUrl = baseUrl;
        this.token = token;
        this.context = context;
        this.agent = new https.Agent({
            rejectUnauthorized: false
        });
        this.CREATE_LOAD_URL = baseUrl + "/loads/create";
        this.UPDATE_LOAD_URL = baseUrl + "/loads/update";
        this.ATTACH_SHIPMENT_URL = baseUrl + "/shipmentLegs/assignToLoad";
        this.DELETE_SHIPMENTLEG_URL = baseUrl + "/shipmentLegs/maintain";
        this.REFERENCE_NUMBER_URL = baseUrl + "/referenceNumbers/maintain";
        this.RATE_URL = baseUrl + "/loads/rate";
        this.SET_TO_PLANNED_URL = baseUrl + "/loads/setToPlanned";
        this.SUSPEND_LOAD_URL = baseUrl + "/loads/suspend";
        this.ASSIGN_TO_PLANNED_LOAD_URL = baseUrl + "/shipmentLegs/assignToPlannedLoad";
        this.GET_LOAD_URL = baseUrl + "/loads/get";
        this.AUTO_TENDER_URL = baseUrl + "/loads/autoTender";
        this.RETURN_LOAD_TO_PLANNED_URL = baseUrl + "/loads/returnToPlanned";
    }

    async fetchFromBY(requestUrl, payload, activityType) {
        var requestOptions = {
            method: 'POST',
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + this.token },
            agent: this.agent,
            body: JSON.stringify(payload)
        };

        return await httpUtil.fetchDataAndTime(requestUrl, requestOptions, activityType)
    }

    /**
     * Creates an empty load. In case of error, detailed information will be returned in the ResponseHeader field.
     * 
     * @param {*} request 
     * @returns load
     */
    async processLoadCreate(request) {
        this.context.log(`--------------------------- Start of Create Load Activity ---------------------------`);
        const plan = request.plan;
        var serviceCode = plan.transitDetail.serviceType;
        if (serviceCode === 'SMPKG') {
            serviceCode = 'SPSD';
        }

        const byPayload = {
            systemPlanID: plan.identifiers.planId,
            serviceCode: serviceCode,
            equipmentTypeCode: plan.equipment.equipmentCode.split('_').pop(),
            carrierCode: plan.carrierAttributes.carrierId,
            loadScheduledDateTime: request.earliestScheduledDate,
            loadStartDateTime: plan.schedule.maxPickupTs,
            loadEndDateTime: plan.schedule.maxDueTs,
            loadScheduleCompletedFlag: false
        };
        const loadCreatedPayloadArr = [byPayload];
        const loadCreatedPayload = { loadCreateData: loadCreatedPayloadArr };

        const responseJson = await this.fetchFromBY(this.CREATE_LOAD_URL, loadCreatedPayload, "CREATE_LOAD");

        this.context.log(`Completed create by load activity : created load id is ${responseJson['systemLoadID'][0]}`);

        const systemShipmentLegIDs = [];

        var planStops = plan.stops;
        for (var i = 0; i < planStops.length; i++) {
            if (planStops[i].stopActivityType === 'PickLoaded') {
                for (var j = 0; j < planStops[i].units.length; j++) {
                    systemShipmentLegIDs.push(planStops[i].units[j].identifiers.clientReferenceUnitId);
                }
            }
        }
        this.context.log(`system shipment leg ids array is ${systemShipmentLegIDs}`);
        this.context.log(`--------------------------- End of Create Load Activity ---------------------------`);

        const loadDto = {
            plan: plan,
            systemLoadID: responseJson.systemLoadID[0],
            systemShipmentLegID: systemShipmentLegIDs
        }

        return loadDto;
    }

    /**
     * Update the load with the load scheduled completed flag. In case of error, detailed information will be returned in the ResponseHeader field.
     * 
     * @param {*} loadDto 
     */
    async processLoadUpdate(loadDto) {
        this.context.log(`--------------------------- Start of load update Activity ---------------------------`);

        const byUpdateLoadPayload = {
            loadScheduleCompletedFlag: true,
            systemLoadID: loadDto.systemLoadID
        };

        await this.fetchFromBY(this.UPDATE_LOAD_URL, byUpdateLoadPayload, "LOAD_UPDATE")
        this.context.log(`--------------------------- End of load update Activity ----------------------------`);
    }
    

    /**
     * delete shipment legs to an existing load. In case of error, detailed information will be returned in the ResponseHeader field.
     * 
     * @param {*} plan 
     */
    async processDeleteLeg(plan) {
        this.context.log(`--------------------------- Start of Delete Shipment Leg Activity---------------------------`);
      
        var planStops = plan.stops;
        var systemLoadID = plan.identifiers.loadId;
        for (var i = 0; i < planStops.length; i++) {
            if (planStops[i].stopActivityType === 'PickLoaded') {
                for (var j = 0; j < planStops[i].units.length; j++) {
                    const shipmentNumber  = planStops[i].units[j].identifiers.unitId ;
                    const systemShipmentLegID = planStops[i].units[j].identifiers.clientReferenceUnitId ;
                    const deleteFlag = planStops[i].units[j].identifiers.deleteShipmentLeg ;
                    if ( deleteFlag){
                        const byProcessDeleteLeg = {
                            deleteFlag: true,
                            shipmentLegMaintainData: [
                                {       
                                    shipmentNumber: shipmentNumber,
                                    systemShipmentLegID: systemShipmentLegID
                                }
                            ],
                            splitFlag: false
                        };
                        this.context.log(`Started Delete shipment Leg for shipment Leg ID: ${systemShipmentLegID} and load : ${systemLoadID}`);
                        await this.fetchFromBY(this.DELETE_SHIPMENTLEG_URL, byProcessDeleteLeg, "DELETE_SHIPMENTLEG");
                        this.context.log(`--------------------------- End of Delete Shipment Leg Activity ----------------------------`);
                    }  
                }
            }
        }

       
    }

    
    /**
     * Assigns existing shipment legs to an existing load. In case of error, detailed information will be returned in the ResponseHeader field.
     * 
     * @param {*} loadDto 
     */
    async processAssignToLoad(loadDto) {
        this.context.log(`--------------------------- Start of Attach Shipment Activity ---------------------------`);
        this.context.log(`Started Attach shipment activity for shipment Leg ID: ${loadDto.systemShipmentLegID} to load : ${loadDto.systemLoadID}`);

        const byAttachShipmentPayload = {
            discardConflictingAppointmentsFlag: true,
            systemLoadID: loadDto.systemLoadID,
            systemShipmentLegID: loadDto.systemShipmentLegID
        };

        await this.fetchFromBY(this.ATTACH_SHIPMENT_URL, byAttachShipmentPayload, "ATTACH_SHIPMENT")
        this.context.log(`--------------------------- End of Attach Shipment Activity ----------------------------`);
    }

    /**
     * Maintain reference numbers of specific entity.
     * 
     * @param {*} request 
     * @param {*} loadDto 
     */
    async processMaintainEntityReferenceNumber(request, loadDto) {
        this.context.log(`--------------------------- Start of Load Optimization attach activity ---------------------------`);

        const requestLoadReferencePayload = {
            referenceNumberUpdateData: [
                {
                    referenceNumberEntityKey: loadDto.systemLoadID,
                    referenceNumber: request.optmizationId,
                    referenceNumberTypeCode: "WFP Opt ID",
                    referenceNumberCategoryEnumVal: "RNC_LD_LEG",
                    referenceNumberActionEnumVal: "AT_ADD"
                },
                {
                    referenceNumberEntityKey: loadDto.systemLoadID,
                    referenceNumber: request.optimizationStrategy,
                    referenceNumberTypeCode: "optimizationStrategy",
                    referenceNumberCategoryEnumVal: "RNC_LD_LEG",
                    referenceNumberActionEnumVal: "AT_ADD"
                }
            ]
        }
        await this.fetchFromBY(this.REFERENCE_NUMBER_URL, requestLoadReferencePayload, "LOAD_OPTIMIZATION")
        this.context.log(`--------------------------- End of Load Optimization attach activity ---------------------------`);
    }

    /**
     * Rates the loads specified. 
     * Returns a list of loads. 
     * This operation may invoke Routing, Rating and Scheduling. 
     * In case of error, detailed information will be returned in the ResponseHeader field.
     * @param {*} loadDto 
     */
    async processLoadRate(loadDto) {
        this.context.log(`--------------------------- Start of Rate Activity ---------------------------`);
        const ratePayload = {
            loadRateData: [
                {
                    systemLoadID: loadDto.systemLoadID
                }
            ],
            returnRoutingMessageLogFlag: true
        };

        await this.fetchFromBY(this.RATE_URL, ratePayload, "RATE_LOAD")
        this.context.log(`--------------------------- End of Rate Activity ---------------------------`);
    }

    /**
     * Use processSetLoadToPlanned to advance an existing load with a status of Open to a status of Planned and remove the load from its associated plan.
     * 
     * If the load does not currently have valid Routing, Rating and Scheduling information, the operation will invoke Routing, Rating and Scheduling for the load. 
     * After successfully being set to Planned status, the load might be tendered or submitted for Carrier Sequential Tendering based on the Auto Tender setting in Global Defaults. 
     * You can successfully set a load to Planned status, but still fail to tender it or to submit it for Carrier Sequential Tendering. 
     * This is because the two operations are done in separate transactions.
     * 
     * In case of error, detailed information will be returned in the ResponseHeader field.
     * @param {*} loadDto 
     */
    async processSetLoadToPlanned(loadDto) {
        this.context.log(`--------------------------- Start of set to plan Activity ---------------------------`);
        const setToPlannedPayload = {
            systemLoadID: [loadDto.systemLoadID]
        };

        await this.fetchFromBY(this.SET_TO_PLANNED_URL, setToPlannedPayload, "SET_TO_PLAN");
        this.context.log(`--------------------------- End of set to plan Activity ---------------------------`);
    }

    /**
     * Sets the given loads to be suspended. 
     * Will return an error if the load is not in suspended status. In case of error, detailed information will be returned in the ResponseHeader field.
     * 
     * @param {*} loadDto 
     */
    async processLoadSuspend(loadDto) {
        this.context.log("------------------- Start of suspend load activity --------------------------------");
        const suspendLoadPayload = {
            SECCode: "SUSP",
            systemLoadID: [loadDto.systemLoadID]
        };

        await this.fetchFromBY(this.SUSPEND_LOAD_URL, suspendLoadPayload, "SUSPEND_LOAD");
        this.context.log("------------------- End of suspend load activity --------------------------------");
    }

    /**
     * Adds shipment legs to a load that is in Planned or greater status.
     * In case of error, detailed information will be returned in the ResponseHeader field.
     * 
     * @param {*} loadDto 
     */
    async processAssignToPlannedLoad(loadDto) {
        this.context.log("------------------- Start of assign to planned load activity --------------------------------");
        const currentDate = new Date();
        const byAttachShipmentPayload = {
            assignToPlannedLoadData: [{
                SECInformation: {
                    SECCode: "FOM_LOAD_UPDATE_",
                    movementDateTime: currentDate.toISOString()
                },
                discardConflictingAppointmentsFlag: true,
                systemLoadID: loadDto.systemLoadID,
                systemShipmentLegID: loadDto.systemShipmentLegID
            }]
        };

        await this.fetchFromBY(this.ASSIGN_TO_PLANNED_LOAD_URL, byAttachShipmentPayload, "ASSIGN_SHIPMENTS_TO_PLANNED_LOAD");
        this.context.log("------------------- End of assign to planned load activity --------------------------------");
    }

    /**
     * Loads exactly one Load entity.
     * 
     * @param {*} loadDto 
     */
    async getLoadEntity(loadDto) {
        this.context.log("------------------- Start of get load activity --------------------------------");
        const payload = {
            id: loadDto.systemLoadID
        };

        const loadDetails = await this.fetchFromBY(this.GET_LOAD_URL, payload, "GET_LOAD");
        this.context.log("------------------- End of get load activity --------------------------------");
        return loadDetails.data;
    }

    /**
     * Start/stop/resume carrier sequential tendering process for an existing load.
     * 
     * @param {*} loadDto 
     * @param {*} autoTenderProcess
     */
    async processAutoTender(loadDto, autoTenderProcess) {
        this.context.log("------------------- Start of auto tender activity --------------------------------");
        const payload = {
            autoTenderProcessModeEnumVal: autoTenderProcess,
            systemLoadID: [loadDto.systemLoadID]
        };

        await this.fetchFromBY(this.AUTO_TENDER_URL, payload, "AUTO_TENDER_LOAD");
        this.context.log("------------------- End of auto tender activity --------------------------------");
    }

    /**
     * Returns the status of each load in the load ID list from Tender Rejected to Planned.
     * In case of error, detailed information will be returned in the ResponseHeader field.
     * 
     * @param {*} loadDto 
     */
    async processLoadReturnToPlanned(loadDto) {
        this.context.log("------------------- Start of Return Load to planned status activity --------------------------------");
        const payload = {
            systemLoadID: [loadDto.systemLoadID]
        };

        await this.fetchFromBY(this.RETURN_LOAD_TO_PLANNED_URL, payload, "RETURN_LOAD_TO_PLANNED");
        this.context.log("------------------- End of Return Load to planned status activity --------------------------------");
    }
}
module.exports = ByService