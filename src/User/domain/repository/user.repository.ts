import { Optional } from "src/core/ortogonal_solutions/Optional";
import { User } from "../User";

export interface UserRepository{
    findUserLogin(email:string,pass:string):Promise<Optional<User>>;

}


