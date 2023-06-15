import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";



export class UserLoginDTO{
    @IsString()
    email:string;
    @IsString()
    pass:string;
    
}