import { Component } from "react";
import ResumeComponent from "../components/resume/resume";
import experience from "../public/resume/data/experience.json"
import skills from "../public/resume/data/skills.json"
import otherSkills from "../public/resume/data/otherSkills.json"
import education from "../public/resume/data/education.json"

class Resume extends Component<IResume> {

  constructor(props: IResume) {
    super(props);
  }

  render() {
    return <div>
      <h1>Testing text works!</h1>
      <ResumeComponent data={this.props}></ResumeComponent>
    </div>
  }
}

export async function getStaticProps(context) {
  const skills = await (await fetch(`${server}/resume/data/skills.json`)).json();
  const otherSkills = await (await fetch(`${server}/resume/data/otherSkills.json`)).json();
  const education = await (await fetch(`${server}/resume/data/education.json`)).json();
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

export const server = dev ? 'http://localhost:3000' : process.env.host;