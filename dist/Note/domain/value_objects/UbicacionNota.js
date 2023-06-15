"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UbicacionNota = void 0;
class UbicacionNota {
    constructor(l, a) {
        this.latitud = l;
        this.longitud = a;
    }
    getLatitud() {
        return this.latitud;
    }
    getAltitud() {
        return this.longitud;
    }
    equals(other) {
        if ((other.getAltitud() == this.longitud) && (other.getLatitud() == this.latitud))
            return true;
        else
            return false;
    }
}
exports.UbicacionNota = UbicacionNota;
//# sourceMappingURL=UbicacionNota.js.map