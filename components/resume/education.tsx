import { IEducation } from "../../interfaces/education"

interface Props {
  data: IEducation;
}

export default function EducationComponent(props: Props) {
    return <div>
      { props.data.map(degree => {
        return <div key={degree.degree}>{degree.degree}</div> 
      }) }
    </div>
}