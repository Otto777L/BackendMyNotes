import { IdUser } from "./value_objects/IdUser";
import { UserBornDate } from "./value_objects/UserBornDate";
import { UserEmail } from "./value_objects/UserEmail";
import { UserName } from "./value_objects/UserName";
export declare class User {
    private notaId;
    private name;
    private email;
    private bornDate;
    constructor(id: IdUser, name: UserName, email: UserEmail, bornDate: UserBornDate);
}
