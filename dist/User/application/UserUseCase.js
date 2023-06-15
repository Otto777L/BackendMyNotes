"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsertUsecase = void 0;
class UsertUsecase {
    constructor(UserRepository) {
        this.UserRepository = UserRepository;
        this.findUserLogin = async (email, pass) => {
            const productFind = this.UserRepository.findUserLogin(email, pass);
            return productFind;
        };
    }
}
exports.UsertUsecase = UsertUsecase;
//# sourceMappingURL=UserUseCase.js.map