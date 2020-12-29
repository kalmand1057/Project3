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

function Jumbotron({ children }) {
    return (
        <section className="intro">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="heading-count">
                            <h2>YOUR ADVENTURE BEGINS IN ...</h2>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="row countdown justify-content-center">
                            <div id="clock" className="time-count">
                                <div className="time-entry days"><span>00</span> Months</div> 
                                <div className="time-entry hours"><span>0</span> Weeks</div> 
                                <div className="time-entry minutes"><span>0</span> Days</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Jumbotron;
