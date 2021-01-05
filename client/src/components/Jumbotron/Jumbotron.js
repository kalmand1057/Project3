import React from "react";
import "./Jumbotron.css";


// function Jumbotron({ children }) {
//   return (
//     <div
//       style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
//       className="jumbotron"
//     >
//       {children}
//     </div>
//   );
// }

function Jumbotron(props) {
    return (
        <section className="intro">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="heading-count">
                            <h2>YOUR ADVENTURE BEGINS ON ...</h2>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="row countdown justify-content-center">
                            <div id="clock" className="time-count">
                                <div className="time-entry days">{props.month}</div> 
                                <div className="time-entry hours">{props.day}</div> 
                                <div className="time-entry minutes">{props.year}</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Jumbotron;
