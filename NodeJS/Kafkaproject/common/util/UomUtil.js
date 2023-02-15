class UomUtil{
    static getUnitInMinutes(value,currentUom) {
        if("MIN".localeCompare(currentUom) == 0){
            return value;
        }else{
            console.log("Request to convert invalid UOM:",currentUom,"Value:",value);
            return value;
        }

    }

}
module.exports = UomUtil;