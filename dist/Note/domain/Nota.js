"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nota = void 0;
const Optional_1 = require("../../core/ortogonal_solutions/Optional");
const MementoNota_1 = require("./MementoNota");
class Nota {
    constructor(id, t, c, fechaCreacion, fechaEliminacion, fechaActualizacion, ubicacion, user) {
        this.notaId = id;
        this.titulo = t;
        this.cuerpo = c;
        this.fechaCreacion = fechaCreacion;
        this.fechaEliminacion = fechaEliminacion;
        this.fechaActualizacion = fechaActualizacion;
        this.ubicacion = ubicacion;
        this.usuario = user;
    }
    eliminar(fecha) {
        this.fechaEliminacion = new Optional_1.Optional(fecha);
    }
    setTitulo(t) {
        this.titulo = t;
    }
    setCuerpo(c) {
        this.cuerpo = c;
    }
    guardar() {
        return new MementoNota_1.MementoNota(this.notaId, this.titulo, this.cuerpo, this.fechaCreacion, this.fechaEliminacion, this.fechaActualizacion, this.ubicacion, this.usuario);
    }
}
exports.Nota = Nota;
//# sourceMappingURL=Nota.js.map