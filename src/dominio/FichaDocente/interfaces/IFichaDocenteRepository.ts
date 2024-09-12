import { FichaDocenteDTO } from "../DTO/FichaDocente.dto";

interface IFechaDocenteRepository {

    getFichaDocente(idClassroom: string | number, idActividad: string | number): Promise<FichaDocenteDTO>

}

export default IFechaDocenteRepository;