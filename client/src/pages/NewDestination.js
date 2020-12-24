import React, { useState } from "react";
import axios from "axios";
import Conditions from "../components/Conditions/Conditions";


const NewDestination = () => {

    let [city, setCity] = useState("");
    let [responseObj, setResponseObj] = useState({});

    const cities = ["Paris", "Los Angleles", "Berlin", "Spain"];

    function getDestination (e) {
        e.preventDefault();
        axios.request(cities).then(function (response) {
            console.log(response.data);
            setResponseObj(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    };

 return (
   <div className="App">
     <header className="App-header">
       <h1>Select your destination!</h1>
     </header>
     <main>
     <form onSubmit={getDestination}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <button type="submit">Bon Voyage</button>
            </form>
            <Conditions
                responseObj={responseObj}
                />
     </main>
   </div>
 );
}

export default NewDestination;