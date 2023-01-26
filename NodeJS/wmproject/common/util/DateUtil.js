class DateUtil {
  static getDateFormattedObject(load) {
    if (load == null || load == undefined) {
      return load;
    }
    load.createdTs = formatDateString(load.createdTs);
    load.lastUpdatedTs = formatDateString(load.lastUpdatedTs);
    if (load.carrier != null && load.carrier != undefined) {
      load.carrier.createdTs = formatDateString(load.carrier.createdTs);
      load.carrier.lastUpdatedTs = formatDateString(load.carrier.lastUpdatedTs);
      load.carrier.assignedTs = formatDateString(load.carrier.assignedTs);
      load.carrier.pickupTs = formatDateString(load.carrier.pickupTs);
      load.carrier.dueTs = formatDateString(load.carrier.dueTs);
    }
    var charges = load.charges;
    if (charges != null || charges != undefined) {
      for (let element of charges) {
        element.createdTs = formatDateString(element.createdTs);
        element.lastUpdatedTs = formatDateString(element.lastUpdatedTs);
      }
    }

    if (load.schedule != null && load.schedule != undefined) {
      var schedule = load.schedule;
      schedule.pickupTs = formatDateString(schedule.pickupTs);
      schedule.dueTs = formatDateString(schedule.dueTs);
      schedule.cancelTs = formatDateString(schedule.cancelTs);
      schedule.actualPickupTs = formatDateString(schedule.actualPickupTs);
      schedule.actualDeliveryTs = formatDateString(schedule.actualDeliveryTs);
    }
    return load;
  }
  static getDateFormattedPlan(plan) {
    if (plan == null || plan == undefined) {
      return plan;
    } 
    if (plan.provenance != null && plan.provenance != undefined) {
      plan.provenance.createdTs = formatDateString(plan.provenance.createdTs);
      plan.provenance.lastUpdatedTs = formatDateString(plan.provenance.lastUpdatedTs);
      
    }
    if (plan.carrier != null && plan.carrier != undefined) {
      plan.carrier.assignedTs = formatDateString(plan.carrier.assignedTs);
      plan.carrier.pickupTs = formatDateString(plan.carrier.pickupTs);
      plan.carrier.dueTs = formatDateString(plan.carrier.dueTs);
      plan.carrier.createdTs = formatDateString(plan.carrier.createdTs);
      plan.carrier.lastUpdatedTs = formatDateString(plan.carrier.lastUpdatedTs);
    }
    if (plan.schedule != null && plan.schedule != undefined) {
      plan.schedule.minPickupTs = formatDateString(plan.schedule.minPickupTs);
      plan.schedule.maxPickupTs = formatDateString(plan.schedule.maxPickupTs);
      plan.schedule.actualPickupTs = formatDateString(plan.schedule.actualPickupTs);
      plan.schedule.minDueTs = formatDateString(plan.schedule.minDueTs);
      plan.schedule.maxDueTs = formatDateString(plan.schedule.maxDueTs);
      plan.schedule.actualDeliveryTs = formatDateString(plan.schedule.actualDeliveryTs);
      plan.schedule.mustDepartByTs = formatDateString(plan.schedule.mustDepartByTs);
      plan.schedule.mabdTs = formatDateString(plan.schedule.mabdTs);
      plan.schedule.cancelTs = formatDateString(plan.schedule.cancelTs);
    }
    var stops = plan.stops;
    if (stops != null || stops != undefined) {
      for (let stop of stops) {
        stop.expectedArrivalStartTs = formatDateString(stop.expectedArrivalStartTs);
        stop.expectedArrivalEndTs = formatDateString(stop.expectedArrivalEndTs);
        stop.expectedDepartureStartTs = formatDateString(stop.expectedDepartureStartTs);
        stop.expectedDepartureEndTs = formatDateString(stop.expectedDepartureEndTs);
        stop.actualArrivalTs = formatDateString(stop.actualArrivalTs);
        stop.actualDepartureTs = formatDateString(stop.actualDepartureTs);
        stop.appointmentBeginTs = formatDateString(stop.appointmentBeginTs);
        stop.appointmentEndTs = formatDateString(stop.appointmentEndTs);
      }
    }
    var activities = plan.activities;
    if (activities != null || activities != undefined) {
      for (let activity of activities) {
        activity.arrivalTs = formatDateString(activity.arrivalTs);
        activity.departureTs = formatDateString(activity.departureTs);
        
      }
    }  
    var comments = plan.comments;
    if (comments != null || comments != undefined) {
      for (let comment of comments) {
        comment.createdTs = formatDateString(comment.createdTs);
        comment.lastUpdatedTs = formatDateString(comment.lastUpdatedTs);
        
      }
    }
    var charges = plan.charges;
    if (charges != null || charges != undefined) {
      for (let charge of charges) {
        charge.createdTs = formatDateString(charge.createdTs);
        charge.lastUpdatedTs = formatDateString(charge.lastUpdatedTs);
      }
    }
    return plan;
  }
}
function formatDateString(dateString) {
  if (dateString == null || dateString == undefined) {
    return dateString;
  }
  var updatedDateString = dateString.replace("X", "T");
  return updatedDateString;
}
module.exports = DateUtil;
