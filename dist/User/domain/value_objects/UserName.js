"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserName = void 0;
class UserName {
    constructor(s) {
        this.name = "";
        this.name = s;
    }
    equals(other) {
        if (other.getTitulo() == this.getTitulo())
            return true;
        else
            return false;
    }
    getTitulo() {
        return this.name;
    }
}
exports.UserName = UserName;
//# sourceMappingURL=UserName.js.map