import { Either } from "src/core/ortogonal_solutions/Either";

export interface IComandoNota<TCommand>{
    execute(cmd:TCommand):Either<TCommand, Error>
}