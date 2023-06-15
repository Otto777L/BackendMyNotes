"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrearNotaComando = void 0;
const TipoComandoNotas_1 = require("../../../core/application/core_Comandos/TipoComandoNotas");
const ICommand_1 = require("../../../core/application/core_Comandos/ICommand");
class CrearNotaComando extends ICommand_1.ICommand {
    constructor(t, c, fc, fe, fa, l, a, user) {
        super();
        super.tipoComando = TipoComandoNotas_1.TipoComando.CrearNota;
        this.titulo = t;
        this.cuerpo = c;
        this.fechaCreacion = fc;
        this.fechaEliminacion = fe;
        this.fechaActualizacion = fa;
        this.latitud = l;
        this.altitud = a;
        this.usuarioId = user;
    }
}
exports.CrearNotaComando = CrearNotaComando;
//# sourceMappingURL=CrearNotaComando.js.map