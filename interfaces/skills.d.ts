export interface OtherSkill {
    name: Skill;
    skills: Skills;
}

export type OtherSkills = OtherSkill[];

export type Skill = string;
export type Skills = Skill[];