import { IdUser } from "./value_objects/IdUser";
import { UserBornDate } from "./value_objects/UserBornDate";
import { UserEmail } from "./value_objects/UserEmail";
import { UserName } from "./value_objects/UserName";

export class User {
    private notaId:IdUser;
    private name: UserName;
    private email: UserEmail;
    private bornDate: UserBornDate;

    constructor(id:IdUser, name:UserName, email:UserEmail, bornDate:UserBornDate){
        this.notaId = id;
        this.name =name 
    }
}