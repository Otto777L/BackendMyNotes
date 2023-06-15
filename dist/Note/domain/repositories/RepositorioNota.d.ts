import { Optional } from 'src/core/ortogonal_solutions/Optional';
import { Either } from 'src/core/ortogonal_solutions/Either';
import { MementoNota } from 'src/Note/domain/MementoNota';
export interface RepositorioNota {
    createNota(nota: MementoNota): Promise<Either<Optional<MementoNota>, Error>>;
}
