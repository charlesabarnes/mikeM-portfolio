export type IExperience = IRole[];

export interface IRole {
    duties: string[] | IDuty[];
    organization: string;
    department?: string;
    title: string;
    dateStart: string;
    dateEnd: string;
    type: "research" | "professional"
}

export interface IDuty {
    duty: string;
    task: string[];
}