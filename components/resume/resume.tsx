import SkillsComponent from "./skills";
import EducationComponent from "./education";
interface Props {
  data: IResume;
}

export default function ResumeComponent(props: Props) {
    return <div>
        <SkillsComponent data={this.props.data.skills}></SkillsComponent>
        <EducationComponent data={this.props.data.skills}></EducationComponent>
    </div>
}
