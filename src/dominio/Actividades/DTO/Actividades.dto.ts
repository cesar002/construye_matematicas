export interface ActividadesDTO {
    count:    number;
    next:     null;
    previous: null;
    results:  ActividadDTO[];
}

export interface ActividadDTO {
    id:                  number;
    index:               number;
    title:               string;
    sequenceName:        SequenceName;
    fileSmallThumbnail:  string;
    color:               ColorEnum;
    postType:            PostType;
    ambit:               null;
    expectedLearning:    null;
    theme:               null;
    contents:            null;
    achievements:        null;
    hasConcluded:        boolean;
    studentHasCompleted: null;
    bimonthly:           number;
    classroom:           Classroom;
    beatsUnit:           null;
    unitIndex:           null;
    lessonIndex:         null;
}

export interface Classroom {
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
    name:        SubjectName;
    isActive:    boolean;
    resourceUri: string;
    grade:       Domain;
    color:       ColorClass;
    icon:        Icon;
    index:       number;
}

export interface ColorClass {
    id:    number;
    color: ColorEnum;
    name:  ColorName;
}

export enum ColorEnum {
    The9152A8 = "9152a8",
}

export enum ColorName {
    PrimariaConstruyeTusMatemáticas = "Primaria - Construye tus matemáticas",
}

export interface Icon {
    id:   number;
    icon: string;
    name: ColorName;
}

export enum SubjectName {
    ConstruyeTusMatemáticas = "Construye tus matemáticas",
}

export enum PostType {
    CMSPost = "cmsPost",
}

export enum SequenceName {
    NúmeroAdiciónYSustracción = "Número. Adición y sustracción",
}
