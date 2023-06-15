import { notaModel } from "src/Note/infraestructure/schemas/nota.schema";
import { Either } from "src/core/ortogonal_solutions/Either";
import { Optional } from "src/core/ortogonal_solutions/Optional";
import { MementoNota } from "src/Note/domain/MementoNota";
import { Error } from "mongoose";
export declare class MongoNotaRepositorio {
    private readonly notamodel;
    constructor(notamodel: notaModel);
    createNota(nota: MementoNota): Promise<Either<Optional<MementoNota>, Error>>;
}
