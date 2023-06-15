"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBornDate = void 0;
class UserBornDate {
    constructor() {
        this.date = new Date();
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
exports.UserBornDate = UserBornDate;
//# sourceMappingURL=UserBornDate.js.map