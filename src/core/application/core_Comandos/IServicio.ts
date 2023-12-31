import { Either } from "src/core/ortogonal_solutions/Either";
import { ICommand } from "./ICommand";

export interface IServicio<TView>{
    execute(cmd:ICommand):Promise<Either<TView, Error>>
}