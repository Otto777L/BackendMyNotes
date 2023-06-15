"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaNota = void 0;
const Optional_1 = require("../../../core/ortogonal_solutions/Optional");
const Nota_1 = require("../Nota");
const TituloNota_1 = require("../value_objects/TituloNota");
const IdNota_1 = require("../value_objects/IdNota");
const CuerpoNota_1 = require("../value_objects/CuerpoNota");
const FechaNota_1 = require("../value_objects/FechaNota");
const UbicacionNota_1 = require("../value_objects/UbicacionNota");
const IdUser_1 = require("../../../User/domain/value_objects/IdUser");
class FabricaNota {
    static fabricar(id, titulo, cuerpo, fechaCreacion, fechaEliminacion, fechaActualizacion, latitud, altitud, usuarioId) {
        const i = new IdNota_1.IdNota(id);
        const t = new TituloNota_1.TituloNota(titulo);
        const c = new CuerpoNota_1.CuerpoNota(cuerpo);
        const fc = new FechaNota_1.FechaNota(fechaCreacion);
        let fe;
        if (fechaEliminacion.HasValue())
            fe = new Optional_1.Optional(new FechaNota_1.FechaNota(fechaEliminacion.getValue()));
        else
            fe = new Optional_1.Optional();
        const fa = new FechaNota_1.FechaNota(fechaActualizacion);
        const ubi = new UbicacionNota_1.UbicacionNota(latitud, altitud);
        const user = new IdUser_1.IdUser(usuarioId);
        return new Nota_1.Nota(i, t, c, fc, fe, fa, ubi, user);
    }
}
exports.FabricaNota = FabricaNota;
//# sourceMappingURL=FabricaNota.js.map