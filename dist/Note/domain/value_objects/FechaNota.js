"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FechaNota = void 0;
class FechaNota {
    constructor(d) {
        this.date = d;
    }
    equals(other) {
        if (other.getFecha() == this.getFecha())
            return true;
        else
            return false;
    }
    getFecha() {
        return this.date;
    }
}
exports.FechaNota = FechaNota;
//# sourceMappingURL=FechaNota.js.map