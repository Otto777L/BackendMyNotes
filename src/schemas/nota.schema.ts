import {Schema,Prop,SchemaFactory} from "@nestjs/mongoose";
import { Document,Model } from "mongoose";

export type NotasDocument = NotaSchema & Document;

@Schema()
export class NotaSchema{
    @Prop({
        unique:true,
        required:true,
    })
    idnota:string;

    @Prop({
        required:true,
        trim:true
    })
    titulonota:string;
    @Prop({
        required:true,
        trim:true
    })
    cuerponota:string;
    @Prop({
        required:true,
    })
    ubicacion_latitud:number;
    @Prop({
        required:true,
    })
    ubicacion_longitud:number;
    @Prop({
        required:true,
    })
    date:Date;
    @Prop({
        required:true,
    })
    @Prop({
        required:true,
    })
    idouserowner:string;
}

export const notasSchema = SchemaFactory.createForClass(NotaSchema);
export type notaModel = Model<NotaSchema>;