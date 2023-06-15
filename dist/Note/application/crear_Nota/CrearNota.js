"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrearNota = void 0;
const Either_1 = require("../../../core/ortogonal_solutions/Either");
const FabricaNota_1 = require("../../domain/fabrics/FabricaNota");
class CrearNota {
    constructor(g, r) {
        this.generadorUUID = g;
        this.repositorio = r;
    }
    async execute(cmd) {
        let notaId = this.generadorUUID.generate();
        let nota = FabricaNota_1.FabricaNota.fabricar(notaId, cmd.titulo, cmd.cuerpo, cmd.fechaCreacion, cmd.fechaEliminacion, cmd.fechaActualizacion, cmd.latitud, cmd.altitud, cmd.usuarioId);
        console.log(nota);
        const vistaNota = nota.guardar();
        const nuevaNota = await this.repositorio.createNota(vistaNota);
        return Either_1.Either.makeLeft(nuevaNota.getLeft().getValue());
    }
}
exports.CrearNota = CrearNota;
//# sourceMappingURL=CrearNota.js.map