export interface FichaDocenteDTO {
    id:                number;
    index:             number;
    name:              string;
    image:             string;
    create:            Create;
    cutout:            Cutout;
    discover:          Discover;
    idea:              Idea;
    score:             null;
    avgScore:          number;
    hasConcluded:      boolean;
    sendCreate:        boolean;
    sendCreateCount:   number;
    sendCutout:        boolean;
    sendCutoutCount:   number;
    sendDiscover:      boolean;
    sendDiscoverCount: number;
    sendIdea:          boolean;
    sendIdeaCount:     number;
    bimonthly:         number;
    classroom:         Classroom;
    sequence:          Sequence;
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
    name:        string;
    isActive:    boolean;
    resourceUri: string;
    grade:       Domain;
    color:       Color;
    icon:        Icon;
    index:       number;
}

export interface Color {
    id:    number;
    color: string;
    name:  string;
}

export interface Icon {
    id:   number;
    icon: string;
    name: string;
}

export interface Create {
    id:                number;
    teacherComplement: string;
    cmscreate:         any[];
}

export interface Cutout {
    id:                number;
    teacherComplement: string;
    cmscutout:         any[];
}

export interface Discover {
    id:                number;
    teacherComplement: string;
    cmsdiscover:       CMS[];
}

export interface CMS {
    id:      number;
    index:   number;
    content: Content;
}

export interface Content {
    id:                number;
    index:             number;
    name:              string;
    typeContent:       string;
    text:              string;
    image:             string;
    wysiwyg:           string;
    imageTextImage:    string;
    imageTextText:     string;
    imageLinkImage:    string;
    imageLinkLink:     string;
    link:              string;
    linkTextLink:      string;
    linkTextText:      string;
    availableDownload: boolean;
}

export interface Idea {
    id:                number;
    teacherComplement: string;
    cmsidea:           CMS[];
}

export interface Sequence {
    id:                number;
    name:              string;
    teacherComplement: string;
    color:             string;
    order:             number;
    level:             number;
    grade:             number;
    subject:           number;
}
