import SkillsComponent from "./skills";
interface Props {
  data: IResume;
}

export default function ResumeComponent(props: Props) {
    return <div>
        <SkillsComponent data={this.props.data.skills}></SkillsComponent>
    </div>
}
