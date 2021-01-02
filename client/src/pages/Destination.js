import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import BudgetChart from "../components/BudgetChart";
import Forecast from "../components/Forecast/Forecast";
import Jumbotron from "../components/Jumbotron/Jumbotron"
import Comment from "../components/Comments/Comment"
import { Segment, Header, Container } from 'semantic-ui-react';
import Axios from "axios";

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
  const [userInfo, setUserInfo] = useState({budget: {}, email: ""});
  useEffect(() => {
    getUserInfo();
  }, [])

  const getUserInfo = () => {
    Axios({
        method: "GET",
        withCredentials: true,
        url: "/api/user",
      }).then((res) => {
          const user = res.data.username
          Axios({
            method: "GET",
            withCredentials: true,
            url: `/api/${user}`
        })
        .then((result) => {
            setUserInfo({budget: result.data.budget, email: result.data.username})
        })
      })
}

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
          <BudgetChart budget={userInfo.budget} remaining={userInfo.budget.maxBudget - userInfo.budget.airFare - userInfo.budget.dining - userInfo.budget.lodging - userInfo.budget.misc}/>
        </Link>
      </Segment>

      <Segment>
      <Header inverted style={{textAlign: "center"}}>Fun Activities</Header>
      <Comment/>
      </Segment>
      </Segment.Group>
     </Container>
       
     
     <footer>
       Page created by yournamehere
     </footer>
   </div>
 );
}