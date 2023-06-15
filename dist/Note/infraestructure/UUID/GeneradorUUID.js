"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneradorUUID = void 0;
const uuid_1 = require("uuid");
class GeneradorUUID {
    generate() {
        let id = (0, uuid_1.v4)();
        return id;
    }
}
exports.GeneradorUUID = GeneradorUUID;
//# sourceMappingURL=GeneradorUUID.js.map