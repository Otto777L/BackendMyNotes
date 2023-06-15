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
exports.MongoNotaRepositorio = void 0;
const common_1 = require("@nestjs/common");
const Nota_1 = require("../../domain/Nota");
const mongoose_1 = require("@nestjs/mongoose");
const Either_1 = require("../../../core/ortogonal_solutions/Either");
const Optional_1 = require("../../../core/ortogonal_solutions/Optional");
let MongoNotaRepositorio = exports.MongoNotaRepositorio = class MongoNotaRepositorio {
    constructor(notamodel) {
        this.notamodel = notamodel;
    }
    async createNota(nota) {
        console.log('CreateNotaDTO', nota);
        try {
            console.log('prueba2', await new this.notamodel(nota).save());
            const notaGuardada = await new this.notamodel(nota).save();
            return Promise.resolve(Either_1.Either.makeLeft(new Optional_1.Optional(nota)));
        }
        catch (e) {
            return Promise.resolve(Either_1.Either.makeRight(e));
        }
    }
};
exports.MongoNotaRepositorio = MongoNotaRepositorio = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Nota_1.Nota.name)),
    __metadata("design:paramtypes", [Object])
], MongoNotaRepositorio);
//# sourceMappingURL=nota.repository.adapter.js.map