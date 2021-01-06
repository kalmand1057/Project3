import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import BudgetChart from "../components/BudgetChart";
import Forecast from "../components/Forecast/Forecast";
import Jumbotron from "../components/Jumbotron/Jumbotron"
import CommentList from "../components/Comments/CommentList"
import { Header, Container, Button } from 'semantic-ui-react';
import GoogleMap from "../components/GoogleMap/GoogleMap";
import Axios from "axios";


const styles = {
  bkgd: {
    background: 'transparent',
    color: 'white'
  },
  heading: {
    margin: 90
  },
  fix: {
      height: "100vh",
  },
  define: {
    textShadow: "0 0 3px #696969",
    textAlign: "center"
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
       {userInfo.city === "none" ? 
       <>
        <div style={styles.fix}>
        <Header as='h1' inverted style={styles.define}>Please Set your City and Day first!</Header>
          <Link to="/newdestination">
            <Button inverted>Click here!</Button>
          </Link>
        </div>
       </>
       :
       <>
    <Jumbotron month={month[parseInt(userInfo.date.month) - 1]} day={userInfo.date.day} year={userInfo.date.year}/>
     <div className="ui stackable two column centered grid">

       <div className="two column row">
         <div className="column">
          <Forecast city={userInfo.city}/>
         </div>
         <div className="column">
          <Header as="h2" inverted dividing style={styles.define}>City Map</Header>
          <GoogleMap city={userInfo.city}/>
         </div>
       </div>

       <div className="two column row">
         <div className="column">
          <Header as="h2" inverted dividing style={styles.define}>Budget for Trip</Header>
          <Link to="/budget">
            {userInfo.budget.maxBudget ? 
              <BudgetChart budget={userInfo.budget} remaining={userInfo.budget.maxBudget - userInfo.budget.airFare - userInfo.budget.dining - userInfo.budget.lodging - userInfo.budget.misc}/>
              :
              <div style={{textAlign: "center", height: "10rem"}}>
                <Button inverted>Set and Initial budget</Button>
              </div>
            }
          </Link>
         </div>
         <div className="column">
         <Header as="h2" inverted dividing style={styles.define}>Notes</Header>
        <Link to="/comment">
          {userInfo.comment.length ? 
                <>
                  {comments.map(comment => (
                      <CommentList body={comment}/> 
                    ))
                  }
                </>
                :
                <div style={{textAlign: "center", height: "10rem"}}>
                  <Button inverted>Set Notes</Button>
                </div>
          }

        </Link>
         </div>
       </div>
     </div>
     </>
     }
     </Container>
 
   </div>
 );
 }
