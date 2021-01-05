import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import BudgetChart from "../components/BudgetChart";
import Forecast from "../components/Forecast/Forecast";
import Jumbotron from "../components/Jumbotron/Jumbotron"
import CommentList from "../components/Comments/CommentList"
import { Header, Container } from 'semantic-ui-react';
import GoogleMap from "../components/GoogleMap/GoogleMap";
import Axios from "axios";
// import user from "../../../models/user";

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
  const [userInfo, setUserInfo] = useState({budget: {}, email: "", city: "", comment: [], date: {}});
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
            setUserInfo({budget: result.data.budget, email: result.data.username, city: result.data.city, comment: result.data.comment, date: result.data.date})
        })
      })
  }
  const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
  const comments = userInfo.comment;

 return (
   <div className="App">
     <Container style={styles.heading}>
    <Jumbotron month={month[parseInt(userInfo.date.month) - 1]} day={userInfo.date.day} year={userInfo.date.year}/>
     <div className="ui stackable two column centered grid">

       <div className="two column row">
         <div className="column">
          <Forecast city={userInfo.city}/>
         </div>
         <div className="column">
          <Header inverted style={{textAlign: "center"}}>City Map</Header>
          <GoogleMap city={userInfo.city}/>
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
        {comments.map(comment => (
                <CommentList body={comment}/> 
            ))}
        </Link>
         </div>
        </div>
      </div>
    </Container>
   </div>
 );
 }
