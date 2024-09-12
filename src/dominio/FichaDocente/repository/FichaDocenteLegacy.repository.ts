import HttpLegacy from "../../../infraestructura/Http/HttpLegacy";
import { FichaDocenteDTO } from "../DTO/FichaDocente.dto";
import IFechaDocenteRepository from "../interfaces/IFichaDocenteRepository";

class FichaDocenteLegacyRepository implements IFechaDocenteRepository {

    public async getFichaDocente(idClassroom: string | number, idActividad: string | number): Promise<FichaDocenteDTO> {
        const { data } = await HttpLegacy.get(`/v2/classrooms/${idClassroom}/cmsposts/${idActividad}`, {
            headers: {
                'Authorization': `JWT ${import.meta.env.API_KEY_LEGACY}`,
            }
        });

        return data;
    }

}

export default FichaDocenteLegacyRepository;