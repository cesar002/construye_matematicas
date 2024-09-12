import HttpLegacy from "../../../infraestructura/Http/HttpLegacy";
import { ClassroomsDTO } from "../DTO/Classroom.dto";
import IclassroomRepository from "../interfaces/IClassroomRepository";

class ClassroomLegacyRepository implements IclassroomRepository {

    public async getClassrooms(): Promise<ClassroomsDTO> {
        const { data } = await HttpLegacy.get('/v1/classrooms?page_size=1000', {
            headers: {
                'Authorization': `JWT ${import.meta.env.API_KEY_LEGACY}`,
            }
        });

        return data;
    }

}

export default ClassroomLegacyRepository;