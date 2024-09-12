export interface ClassroomsDTO {
    count:    number;
    next:     null;
    previous: null;
    results:  ClassroomDTO[];
}

export interface ClassroomDTO {
    id:              number;
    subject:         Subject;
    teacher:         Domain;
    group:           Domain;
    domain:          Domain;
    googleClassId:   string;
    googleClassLink: string;
}

export interface Domain {
    id:           number;
    name:         string;
    isActive?:    boolean;
    resourceUri:  string;
    schoolCycle?: Domain;
    grade?:       Domain;
    level?:       Domain;
}

export interface Subject {
    id:          number;
    name:        string;
    isActive:    boolean;
    resourceUri: string;
    grade:       Domain;
    color:       ColorClass;
    icon:        Icon;
    index:       number;
}

export interface ColorClass {
    id:    number;
    color: string;
    name:  string;
}

export interface Icon {
    id:   number;
    icon: string;
    name: string;
}
