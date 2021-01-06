import React from "react";
import moment from "moment";

const Conditions = (props) => {
    return (
        <div style={{background: "rgba(128, 128, 128, 0.5)", width: "30rem", borderRadius: ".5rem"}}>
            {props.responseObj.cod === "200" ?
                <div className="container">
                    <h2 style={{textAlign: "center", fontSize: "30px"}}><strong>{props.responseObj.city.name}</strong></h2>
                    <div className="row">
                        <div className="col-3">
                             <h3>{moment().format("dddd MMM D")}</h3>
                        </div>
                        <div className="col-3">
                             <img src={"http://openweathermap.org/img/wn/" + props.responseObj.list[0].weather[0].icon + "@2x.png"}></img>
                        </div>
                        <div className="col-6">
                             <p>Hi: {props.responseObj.list[0].main.temp_max}</p>
                             <p>Lo: {props.responseObj.list[0].main.temp_min}</p>
                             <p>{props.responseObj.list[0].weather[0].description}</p>
                         </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                             <h3>{moment().add(1, "days").format("dddd MMM D")}</h3>
                        </div>
                        <div className="col-3">
                             <img src={"http://openweathermap.org/img/wn/" + props.responseObj.list[1].weather[0].icon + "@2x.png"}></img>
                        </div>
                        <div className="col-6">
                             <p>Hi: {props.responseObj.list[1].main.temp_max}</p>
                             <p>Lo: {props.responseObj.list[1].main.temp_min}</p>
                             <p>{props.responseObj.list[1].weather[0].description}</p>
                         </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                             <h3>{moment().add(2, "days").format("dddd MMM D")}</h3>
                        </div>
                        <div className="col-3">
                             <img src={"http://openweathermap.org/img/wn/" + props.responseObj.list[2].weather[0].icon + "@2x.png"}></img>
                        </div>
                        <div className="col-6">
                             <p>Hi: {props.responseObj.list[2].main.temp_max}</p>
                             <p>Lo: {props.responseObj.list[2].main.temp_min}</p>
                             <p>{props.responseObj.list[2].weather[0].description}</p>
                         </div>
                    </div>
                </div>
            : null
            }
        </div>
    )
 }
 
 export default Conditions;