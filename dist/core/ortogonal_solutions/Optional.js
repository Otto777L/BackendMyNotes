"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Optional = void 0;
class Optional {
    constructor(v) {
        this.value = null;
        this.assign = false;
        if (v != null) {
            this.assign = true;
            this.value = v;
        }
    }
    HasValue() {
        return this.assign;
    }
    getValue() {
        if (this.assign) {
            return this.value;
        }
        else
            throw Error("Mal uso de la abstraccion OPTIONAL");
    }
}
exports.Optional = Optional;
//# sourceMappingURL=Optional.js.map