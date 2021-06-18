export type Experience = Role[];

export interface Role {
    duties: string[] | Duty[];
    organization: string;
    department?: string;
    title: string;
    dateStart: string;
    dateEnd: string;
    type: "research" | "professional"
}

export interface Duty {
    duty: string;
    task: string[];
}