import { User } from "./User";

export interface ProductRepository{
    findProductname(email):Promise<User>;

}


