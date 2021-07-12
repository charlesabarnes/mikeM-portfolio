import { IDuty, IExperience, IRole } from "../../interfaces/experience"
import { Grid, List, Tab } from 'semantic-ui-react'
import React, { ReactElement } from 'react'
import dayjs from "dayjs";

interface Props {
  data: IExperience;
}

export default function ExperienceComponent(props: Props) {

    return <div>
        <Tab  menu={{ fluid: true, vertical: true, tabular: true, secondary: true, pointing: true }} panes={props.data.sort((a, b)=>{
        if (dayjs(a.dateStart).isBefore(dayjs(b.dateStart))) {
            return 1;
        }
        if (dayjs(a.dateStart).isAfter(dayjs(b.dateStart))) {
          return -1;
        }        
          return 0;
    }).map((role, index) => {
        return { key: index, menuItem: role.organization, render: () => <Tab.Pane>{experiencePane(role)}</Tab.Pane> }
      })}></Tab>
    </div>
}

function experiencePane(role: IRole): ReactElement {
    return <Grid>
        <Grid.Row>{role.title} @ {role.organization}</Grid.Row>
        <Grid.Row>{role.dateStart} - {role.dateEnd || 'Present'}</Grid.Row>
        <Grid.Row>
            <List animated>
                {mapDuty(role.duties)}
            </List>
        </Grid.Row>
    </Grid> 
}


function mapDuty(duties: IDuty[] | string[]): ReactElement {

    return <React.Fragment>{
        duties.map(duty => {
            if (typeof duty === 'string') {
                return <List.Item key={duty}>
                <List.Icon name="angle right"/>
                <List.Content>{duty}</List.Content>
                </List.Item>

            } else { 
                return <List.Item>
                <List.Icon name="angle right"/>
                <List.Content>                    
                    <List.Header>{duty.duty}</List.Header>
                    <List.List animated="true">{mapDuty(duty.tasks)}</List.List>
                    </List.Content>
                </List.Item> 
            }
        })}</React.Fragment>;
}