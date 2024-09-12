import { ClassroomsDTO } from "../DTO/Classroom.dto";

interface IclassroomRepository {

    getClassrooms(): Promise<ClassroomsDTO>

}

export default IclassroomRepository;