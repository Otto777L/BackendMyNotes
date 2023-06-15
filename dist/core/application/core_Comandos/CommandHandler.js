"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandHandler = void 0;
class CommandHandler {
    constructor() {
        this.comandos = new Map();
    }
    execute(dto) {
        for (let key of this.comandos.keys()) {
            if (dto.getType() == key) {
                return this.comandos.get(key).execute(dto);
            }
        }
    }
    addComando(comando, tipo) {
        this.comandos.set(tipo, comando);
    }
}
exports.CommandHandler = CommandHandler;
//# sourceMappingURL=CommandHandler.js.map