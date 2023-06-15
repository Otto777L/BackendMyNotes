import { IsDateString, IsNumber, IsOptional, IsString } from "class-validator";


export class UserUpdateDTO{
    @IsString()
    email:string;
    @IsString()
    name:string;
    @IsString()
    pass:string;
    @IsDateString()
    bornDate:Date;
    
}