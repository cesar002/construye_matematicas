import HttpLegacy from "../../../infraestructura/Http/HttpLegacy";
import { ActividadesDTO } from "../DTO/Actividades.dto";
import IActividadesRepository from "../interfaces/IActividadesRepository";

class ActividadesLegacyRepository implements IActividadesRepository{

    public async getActividades(idClassroom: string | number): Promise<ActividadesDTO> {
        const { data } = await HttpLegacy.get(`/v2/classrooms/${idClassroom}/path?bimonthly=1&page_size=1000`, {
            headers: {
                'Authorization': `JWT ${import.meta.env.API_KEY_LEGACY}`,
            }
        });

        return data;
    }

}

export default ActividadesLegacyRepository;