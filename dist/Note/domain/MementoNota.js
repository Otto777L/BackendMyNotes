"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MementoNota = void 0;
class MementoNota {
    constructor(id, titulo, cuerpo, fechaCreacion, fechaEliminacion, fechaActualizacion, ubicacion, usuarioId) {
        this.notaId = id.getId();
        this.titulo = titulo.getTitulo();
        this.cuerpo = cuerpo.getCuerpo();
        this.fechaCreacion = fechaCreacion.getFecha();
        if (fechaEliminacion.HasValue())
            this.fechaEliminacion = fechaEliminacion.getValue().getFecha();
        this.fechaActualizacion = fechaActualizacion.getFecha();
        this.latitud = ubicacion.getLatitud();
        this.altitud = ubicacion.getAltitud();
        this.usuarioId = usuarioId.getId();
    }
}
exports.MementoNota = MementoNota;
//# sourceMappingURL=MementoNota.js.map