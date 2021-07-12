import SkillsComponent from "./skills";
import EducationComponent from "./education";
import ExperienceComponent from "./experience";

interface Props {
  data: IResume;
}

export default function ResumeComponent(props: Props) {
    return <div>
      <h2>Education</h2>
      <EducationComponent data={props.data.education}></EducationComponent>
      <h2>Experience</h2>
      <ExperienceComponent data={props.data.experience}></ExperienceComponent>
      <h2>Skills</h2>
      <SkillsComponent data={props.data.skills}></SkillsComponent>
    </div>
}
