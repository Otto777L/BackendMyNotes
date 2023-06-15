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
Object.defineProperty(exports, "__esModule", { value: true });
exports.notasSchema = exports.NotaSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let NotaSchema = exports.NotaSchema = class NotaSchema {
};
__decorate([
    (0, mongoose_1.Prop)({
        unique: true,
        required: true,
    }),
    __metadata("design:type", String)
], NotaSchema.prototype, "notaId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true
    }),
    __metadata("design:type", String)
], NotaSchema.prototype, "titulo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        trim: true
    }),
    __metadata("design:type", String)
], NotaSchema.prototype, "cuerpo", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Date)
], NotaSchema.prototype, "fechaCreacion", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: false,
    }),
    __metadata("design:type", Date)
], NotaSchema.prototype, "fechaEliminacion", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Date)
], NotaSchema.prototype, "fechaActualizacion", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Number)
], NotaSchema.prototype, "latitud", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", Number)
], NotaSchema.prototype, "altitud", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
    }),
    __metadata("design:type", String)
], NotaSchema.prototype, "usuarioId", void 0);
exports.NotaSchema = NotaSchema = __decorate([
    (0, mongoose_1.Schema)()
], NotaSchema);
exports.notasSchema = mongoose_1.SchemaFactory.createForClass(NotaSchema);
//# sourceMappingURL=nota.schema.js.map