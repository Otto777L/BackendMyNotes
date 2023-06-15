import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";



export class UserCreateDTO{
    @IsString()
    email:string;
    @IsString()
    name:string;
    @IsString()
    pass:string;
    @IsDateString()
    bornDate:Date;
    
}