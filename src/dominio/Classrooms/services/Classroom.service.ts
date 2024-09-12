import { ClassroomsDTO, ClassroomDTO } from "../DTO/Classroom.dto";
import IclassroomRepository from "../interfaces/IClassroomRepository";

class ClassroomService {

    private readonly classRoomRepository: IclassroomRepository;

    constructor(classroomRepository: IclassroomRepository) {
        this.classRoomRepository = classroomRepository;
    }

    public async getClassrooms(): Promise<ClassroomDTO[]> {
        try {
            const classRoomsResult = await this.classRoomRepository.getClassrooms();

            const classrooms = classRoomsResult.results.filter(classroom => classroom.subject.name == 'Construye tus matemáticas');

            return classrooms;
        } catch (error) {
            return null;
        }
    }

}

export default ClassroomService;