"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEmail = void 0;
class UserEmail {
    constructor(s) {
        this.email = "";
        this.email = s;
    }
    equals(other) {
        if (other.getTitulo() == this.getTitulo())
            return true;
        else
            return false;
    }
    getTitulo() {
        return this.email;
    }
}
exports.UserEmail = UserEmail;
//# sourceMappingURL=UserEmail.js.map