"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TituloNota = void 0;
class TituloNota {
    constructor(s) {
        this.titulo = "";
        this.titulo = s;
    }
    equals(other) {
        if (other.getTitulo() == this.getTitulo())
            return true;
        else
            return false;
    }
    getTitulo() {
        return this.titulo;
    }
}
exports.TituloNota = TituloNota;
//# sourceMappingURL=TituloNota.js.map