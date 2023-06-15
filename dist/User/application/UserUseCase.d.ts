import { UserRepository } from "../domain/repository/user.repository";
export declare class UsertUsecase {
    private UserRepository;
    constructor(UserRepository: UserRepository);
    findUserLogin: (email: string, pass: string) => Promise<import("../../core/ortogonal_solutions/Optional").Optional<import("../domain/User").User>>;
}
