
import { IsDateString, IsEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CrearNotaDTO{
    @IsString()
    titulo:string;
    @IsString()
    cuerpo:string;
    @IsDateString()
    fechaCreacion:Date;
    @IsDateString() @IsOptional()
    fechaEliminacion:Date;
    @IsDateString()
    fechaActualizacion:Date;
    @IsNumber()
    latitud:number;
    @IsNumber()
    altitud:number;
    @IsString()
    usuarioId:string;
}