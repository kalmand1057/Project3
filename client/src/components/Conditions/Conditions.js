import React from "react";

// const Conditions = (props) => {
//    return (
//        <div>
//            {props.responseObj.cod === 200 ?
//                <div>
                   
//                    <p><strong>{props.responseObj.name}</strong></p>
//                    <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
//                </div>
//            : null
//            }
//        </div>
//    )
// }

// export default Conditions;




const Conditions = (props) => {
    return (
        <div>
            {props.responseObj.cod === 200 ?
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                             <h2><strong>{props.responseObj.name}</strong></h2>
                        </div>
                        <div className="col-3">
                            <img></img>
                        </div>
                        <div className="col-6">
                             <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
                        </div>
                    </div>
                </div>
            : null
            }
        </div>
    )
 }
 
 export default Conditions;