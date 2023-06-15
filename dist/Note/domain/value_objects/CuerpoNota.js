"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuerpoNota = void 0;
class CuerpoNota {
    constructor(s) {
        this.cuerpo = s;
    }
    equals(other) {
        if (other.getCuerpo() == this.getCuerpo())
            return true;
        else
            return false;
    }
    getCuerpo() {
        return this.cuerpo;
    }
}
exports.CuerpoNota = CuerpoNota;
//# sourceMappingURL=CuerpoNota.js.map