import { Component } from "react";
import { IEducation } from "../../interfaces/education";
import { IExperience } from "../../interfaces/experience";
import { IOtherSkills, ISkills } from "../../interfaces/skills";
import SkillsComponent from "../../components/skills";
interface IResume {
  experience: IExperience, 
  skills: ISkills, 
  otherSkills: IOtherSkills, 
  education: IEducation
}

class Resume extends Component<IResume> {

  constructor(props: IResume) {
    super(props);
  }

  render() {
    return <div>
      <h1>Testing text works!</h1>
      <SkillsComponent data={this.props.skills}></SkillsComponent>
    </div>
  }
}

export async function getStaticProps(context) {
  const experience = (await fetch(`${server}/resume/data/experience.json`)).text();
  const skills = (await fetch(`${server}/resume/data/skills.json`)).text();
  const otherSkills = (await fetch(`${server}/resume/data/otherSkills.json`)).text();
  const education = (await fetch(`${server}/resume/data/education.json`)).text();
  return {
    props: {
      experience,
      skills,
      education,
      otherSkills
    },
  }
}

export default Resume

const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';