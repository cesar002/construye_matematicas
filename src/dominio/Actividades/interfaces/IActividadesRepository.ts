import { ActividadesDTO } from "../DTO/Actividades.dto";

interface IActividadesRepository {

    getActividades(idClassroom: string | number): Promise<ActividadesDTO>;

}

export default IActividadesRepository;