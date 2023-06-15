"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const nota_schema_1 = require("./Note/infraestructure/schemas/nota.schema");
const Nota_1 = require("./Note/domain/Nota");
const nota_controller_1 = require("./Note/infraestructure/nota-controler/nota.controller");
const nota_repository_adapter_1 = require("./Note/infraestructure/repositories_adapter/nota.repository.adapter");
const MongoNotaAdapter_1 = require("./Note/infraestructure/repositories_adapter/MongoNotaAdapter");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://hanchoel16:123h@cluster0.hwhtx8l.mongodb.net/nota?retryWrites=true&w=majority'),
            mongoose_1.MongooseModule.forFeature([{ name: Nota_1.Nota.name,
                    schema: nota_schema_1.notasSchema
                }])
        ],
        controllers: [nota_controller_1.NotaController],
        providers: [MongoNotaAdapter_1.MongoNotaAdapter, { provide: "RepositorioNota", useClass: nota_repository_adapter_1.MongoNotaRepositorio }
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map