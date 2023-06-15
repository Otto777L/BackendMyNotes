"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaController = void 0;
const common_1 = require("@nestjs/common");
const CrearNotaComando_1 = require("../../application/crear_Nota/CrearNotaComando");
const CrearNotaDTO_1 = require("./CrearNotaDTO");
const CommandHandler_1 = require("../../../core/application/core_Comandos/CommandHandler");
const TipoComando_1 = require("../../../core/application/core_Comandos/TipoComando");
const CrearNota_1 = require("../../application/crear_Nota/CrearNota");
const GeneradorUUID_1 = require("../UUID/GeneradorUUID");
const Optional_1 = require("../../../core/ortogonal_solutions/Optional");
const MongoNotaAdapter_1 = require("../repositories_adapter/MongoNotaAdapter");
let NotaController = exports.NotaController = class NotaController {
    constructor(adapter) {
        this.adapter = adapter;
        this.commandHandler = new CommandHandler_1.CommandHandler();
        const servicioCrearNota = new CrearNota_1.CrearNota(new GeneradorUUID_1.GeneradorUUID(), adapter);
        this.commandHandler.addComando(servicioCrearNota, TipoComando_1.TipoComando.CrearNota);
    }
    getAllNotes() {
        return "hello world";
    }
    async crearNota(nuevaNota) {
        const fechaeliminada = new Optional_1.Optional(nuevaNota.fechaEliminacion);
        const cmd = new CrearNotaComando_1.CrearNotaComando(nuevaNota.titulo, nuevaNota.cuerpo, nuevaNota.fechaCreacion, fechaeliminada, nuevaNota.fechaActualizacion, nuevaNota.latitud, nuevaNota.altitud, nuevaNota.usuarioId);
        const result = await this.commandHandler.execute(cmd);
        if (result.isLeft()) {
            return result.getLeft();
        }
        else {
            return "prueba fallida";
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NotaController.prototype, "getAllNotes", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CrearNotaDTO_1.CrearNotaDTO]),
    __metadata("design:returntype", Promise)
], NotaController.prototype, "crearNota", null);
exports.NotaController = NotaController = __decorate([
    (0, common_1.Controller)('nota'),
    __metadata("design:paramtypes", [MongoNotaAdapter_1.MongoNotaAdapter])
], NotaController);
//# sourceMappingURL=nota.controller.js.map