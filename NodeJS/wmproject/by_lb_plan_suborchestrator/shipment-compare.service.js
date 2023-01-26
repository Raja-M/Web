class ShipmentCompareService {
    constructor(weightPositive, weightNegative, volumePositive, volumeNegative) {
        this.weightPositive = weightPositive;
        this.weightNegative = weightNegative;
        this.volumePositive = volumePositive;
        this.volumeNegative = volumeNegative;
    }

    compareShipments(byShipment, cosmosShipment) {
        var valueChanged = false;

        try {
            if (byShipment && cosmosShipment) {
                var byWeight = byShipment['scaledWeight'];
                var weight = cosmosShipment['unitDetails']['totalWeight']['measurementValue'];

                var byVolume = byShipment['volume'];
                var volume = cosmosShipment['unitDetails']['totalVolume']['measurementValue'];

                if (this.compareWeight(weight, byWeight)) {
                    valueChanged = true;
                    console.log('Weight changed', weight, byWeight);
                }

                if (this.compareVolume(volume, byVolume)) {
                    valueChanged = true;
                    console.log('Volume changed', volume, byVolume);
                }
            }
        } catch (error) {
            console.log("Exception ocurred while comparing the shipments", error);
        }
        return valueChanged;
    }

    compareWeight(A, B) {
        var valueA = parseFloat(A);
        var valueB = parseFloat(B);
        if (valueB) {
            var diff = this.getDiff(valueA, valueB);
            if (diff >= this.weightPositive) return true;
            else if (diff <= -this.weightNegative) return true;
            else return false;
        } else {
            return true;
        }
    }

    compareVolume(A, B) {
        var valueA = parseFloat(A);
        var valueB = parseFloat(B);
        if (valueB) {
            var diff = this.getDiff(valueA, valueB);
            if (diff >= this.volumePositive) return true;
            else if (diff <= -this.volumeNegative) return true;
            else return false;
        } else {
            return true;
        }
    }

    getDiff(a, b) {
        if (a === b) {
            return 0;
        }
        return b - a;
    }

    compareDecimal(A, B) {
        var valueA = parseFloat(A);
        var valueB = parseFloat(B);
        if (valueB) {
            if (this.relDiff(valueA, valueB) > 0) return true;
            else return false;
        } else {
            return true;
        }
    }

    relDiff(a, b) {
        if (a === b) {
            return 0;
        }
        return Math.floor(Math.abs(((b - a) * 100) / a));
    }
}
module.exports = ShipmentCompareService