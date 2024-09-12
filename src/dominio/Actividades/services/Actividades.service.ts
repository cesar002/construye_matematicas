import { ActividadesDTO } from "../DTO/Actividades.dto";
import IActividadesRepository from "../interfaces/IActividadesRepository";

class ActividadesService {

    private readonly actividadesRepository: IActividadesRepository;

    constructor(actividadesRepository: IActividadesRepository) {
        this.actividadesRepository = actividadesRepository;
    }

    public async getActividades(idClassroom: string | number): Promise<ActividadesDTO> {
        const actividades = await this.actividadesRepository.getActividades(idClassroom);

        return actividades;
    }

}

export default ActividadesService;