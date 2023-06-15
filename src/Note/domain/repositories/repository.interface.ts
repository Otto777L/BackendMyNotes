import { CreateNotaDto } from 'src/DTOs/createnota.dto';
import { Nota } from 'src/Note/domain/Nota';

export const NOTA_REPO = "NotaRepository";

export interface NotaRepository {
  createNota(nota:CreateNotaDto): Promise<Nota>;
}