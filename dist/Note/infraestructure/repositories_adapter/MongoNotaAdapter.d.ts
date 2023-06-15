import { Either } from 'src/core/ortogonal_solutions/Either';
import { Optional } from 'src/core/ortogonal_solutions/Optional';
import { RepositorioNota } from 'src/Note/domain/repositories/RepositorioNota';
import { MementoNota } from 'src/Note/domain/MementoNota';
export declare class MongoNotaAdapter implements RepositorioNota {
    private readonly NotaRepository;
    constructor(NotaRepository: any);
    createNota(nota: MementoNota): Promise<Either<Optional<MementoNota>, Error>>;
}
