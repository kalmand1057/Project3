import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import BudgetChart from "../components/BudgetChart";
import Forecast from "../components/Forecast/Forecast";
import Jumbotron from "../components/Jumbotron/Jumbotron"
import Comment from "../pages/Comment"
import { Segment, Header, Container } from 'semantic-ui-react';
import GoogleMap from "../components/GoogleMap/GoogleMap";
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

     <div className="ui stackable two column centered grid">

       <div className="two column row">
         <div className="column">
          <Forecast />
         </div>
         <div className="column">
          <Header inverted style={{textAlign: "center"}}>Route from A to B</Header>
          <GoogleMap />
         </div>
       </div>

       <div className="two column row">
         <div className="column">
          <Header inverted style={{textAlign: "center"}}>Budget for Trip</Header>
          <Link to="/budget">
          <BudgetChart budget={userInfo.budget} remaining={userInfo.budget.maxBudget - userInfo.budget.airFare - userInfo.budget.dining - userInfo.budget.lodging - userInfo.budget.misc}/>
          </Link>
         </div>
         <div className="column">
         <Header inverted style={{textAlign: "center"}}>Notes</Header>
      <Link to="/comment">
          <Comment />
        </Link>
         </div>
       </div>
     </div>
     </Container>
 
   </div>
 );
 }
