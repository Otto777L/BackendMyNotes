"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdUser = void 0;
class IdUser {
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
exports.IdUser = IdUser;
//# sourceMappingURL=IdUser.js.map