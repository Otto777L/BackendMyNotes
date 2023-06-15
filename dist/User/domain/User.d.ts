import { IdUser } from "./value_objects/IdUser";
import { UserBornDate } from "./value_objects/UserBornDate";
import { UserEmail } from "./value_objects/UserEmail";
import { UserName } from "./value_objects/UserName";
import { UserPass } from "./value_objects/passUser";
export declare class User {
    private notaId;
    private name;
    private email;
    private bornDate;
    private pass;
    constructor(id: IdUser, name: UserName, email: UserEmail, bornDate: UserBornDate, pass: UserPass);
}
