export interface CreateNotaDto{
    idnota:string;
    titulonota:string;
    cuerponota:string;
    ubicacion_latitud:number;
    ubicacion_longitud:number;
    date:Date;
    idouserowner:string;
}