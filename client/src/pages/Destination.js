import React from "react";
import { Link } from "react-router-dom"
import BudgetChart from "../components/BudgetChart";
import Forecast from "../components/Forecast/Forecast";
import Jumbotron from "../components/Jumbotron/Jumbotron"
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
     <Jumbotron />
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
        <Link to="/budget">
          <BudgetChart />
        </Link>
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