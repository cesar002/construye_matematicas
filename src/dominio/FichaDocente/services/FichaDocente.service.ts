import { FichaDocenteDTO } from "../DTO/FichaDocente.dto";
import IFechaDocenteRepository from "../interfaces/IFichaDocenteRepository";

class FichaDocenteService {

    private readonly fichaDocenteRepository: IFechaDocenteRepository;

    constructor(fichaDocenteRepository: IFechaDocenteRepository) {
        this.fichaDocenteRepository = fichaDocenteRepository;
    }

    public async getFichaDocente(idClassroom: string | number, idActividad: string | number): Promise<FichaDocenteDTO> {
        const fichaDocente = await this.fichaDocenteRepository.getFichaDocente(idClassroom, idActividad);

        return fichaDocente;
    }
}

export default FichaDocenteService;