import React from "react";
import BudgetChart from "../components/BudgetChart";
import Forecast from "../components/Forecast/Forecast";
import Jumbotron from "../components/Jumbotron/Jumbotron"
import { Header, Container } from 'semantic-ui-react';

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

     <div className="ui stackable two column centered grid">

       <div className="two column row">
         <div className="column">
          <Forecast />
         </div>
         <div className="column">
          <Header inverted style={{textAlign: "center"}}>Route from A to B</Header>
         </div>
       </div>

       <div className="two column row">
         <div className="column">
          <Header inverted style={{textAlign: "center"}}>Budget for Trip</Header>
          <BudgetChart />
         </div>
         <div className="column">
          <Header inverted style={{textAlign: "center"}}>Fun Activities</Header>
         </div>
       </div>
     </div>
     </Container>
     
     <footer>
       Page created by yournamehere
     </footer>
   </div>
 );
 }
