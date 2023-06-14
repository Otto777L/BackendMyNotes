import { Optional } from "src/core/OrtogonalSolutions/Optional";
import { User } from "./User";

export interface ProductRepository{
    findProductname(email):Promise<Optional<User>>;

}


