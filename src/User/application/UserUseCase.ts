import { UserRepository } from "../domain/repository/user.repository"

export class UsertUsecase{
    constructor(private UserRepository: UserRepository){}

public findUserLogin =async (email: string ,pass :string)=>{
  //  const product= new ProductValue(name)
    const productFind = this.UserRepository.findUserLogin(email,pass)
    return productFind
}

}