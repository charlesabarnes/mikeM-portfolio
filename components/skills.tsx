import { ISkills } from "../interfaces/skills";

interface Props {
  data: ISkills;
}

export default function SkillsComponent(props: Props) {
    return <div>
      { props.data.map(skill => {
        return <div key={skill}>{skill}</div> 
      }) }
    </div>
}
