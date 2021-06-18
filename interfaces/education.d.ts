export interface Degree {
    yearCompleted: string;
    degree: string;
    majors: string[];
    school: string;
}

export type Education = Degree[];