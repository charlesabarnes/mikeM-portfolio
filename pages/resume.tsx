import { Component } from "react";
import ResumeComponent from "../components/resume/resume";

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
  const experience = await (await fetch(`${server}/resume/data/experience.json`)).json();
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

export const server = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';