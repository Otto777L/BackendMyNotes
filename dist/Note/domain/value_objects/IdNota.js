"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdNota = void 0;
class IdNota {
    constructor(id) {
        this.uuid = "";
        this.uuid = id;
    }
    equals(other) {
        if (other.getId() == this.getId())
            return true;
        else
            return false;
    }
    getId() {
        return this.uuid;
    }
}
exports.IdNota = IdNota;
//# sourceMappingURL=IdNota.js.map