import { Component } from "react";
import { Education } from "../../interfaces/education";
import { Experience } from "../../interfaces/experience";
import { OtherSkills, Skills } from "../../interfaces/skills";

interface Resume {
  experience: Experience, 
  skills: Skills, 
  otherSkills: OtherSkills, 
  education: Education
}

class Resume extends Component {

  constructor(props: Resume) {
    super(props);
  }

  render() {
    return <div>
      <h1>Testing text works!</h1>
    </div>
  }
}

export async function getStaticProps(context) {
  const experience = (await fetch('./data/experience.json')).json();
  const skills = (await fetch('./data/skills.json')).json();
  const otherSkills = (await fetch('./data/otherSkills.json')).json();
  const education = (await fetch('./data/education.json')).json();
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