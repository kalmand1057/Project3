import React from "react";
import Forecast from "../components/Forecast/Forecast";
import { Segment, Header, Container } from 'semantic-ui-react';

const styles = {
  bkgd: {
    background: 'transparent',
    color: 'white'
  },
  heading: {
    margin: 70
}
}

export default function Destination() {
 return (
   <div className="App">
     <Container style={styles.heading}>
     <Header as='h1' inverted style={{textAlign: "center"}}>Destination</Header>

     <Segment.Group horizontal style={styles.bkgd}>
       
      {/* Forecast Segment */}
      <Segment>
        <Forecast />
      </Segment>

      <Segment>
        <Header inverted style={{textAlign: "center"}}>Route from A to B</Header>
      </Segment>

      </Segment.Group>
      <Segment.Group horizontal style={styles.bkgd}>
      <Segment>
      <Header inverted style={{textAlign: "center"}}>Budget for Trip</Header>
      </Segment>

      <Segment>
      <Header inverted style={{textAlign: "center"}}>Fun Activities</Header>
      </Segment>
      </Segment.Group>
     </Container>
       
     
     <footer>
       Page created by yournamehere
     </footer>
   </div>
 );
}