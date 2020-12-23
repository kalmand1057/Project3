import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";
import axios from "axios";







const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    const options = {
        method: "GET",
        url: "https://community-open-weather-map.p.rapidapi.com/weather",
        params: {
          q: "Seattle",
          lat: "0",
          lon: "0",
          callback: "test",
          id: "2172797",
          lang: "null",
          units: '"metric" or "imperial"',
          mode: "xml, html"
        },
        headers: {
          "x-rapidapi-key": process.env.WEATHER_API,
          "x-rapidapi-host": 'community-open-weather-map.p.rapidapi.com'
        }
      };
    function getForecast () {

        axios.request(options).then(function (response) {
            console.log(response.data);
            setResponseObj(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        // weather data fetch functions
    //     fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seattle", {
	// method: "GET",
	// header: {
	// 	"x-rapidapi-key": "3d40ab63d1msh75710ea8155d119p192fdcjsn7fa927f90a06",
	// 	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    // }

    // })
    // .then(response => response.json())
    // .then(response => {
    //     setResponseObj(response)
    // })

    };

    return (
        <div>
            <h2>Find Current Weather Conditions</h2>
            <button onClick={getForecast}>Get Forecast</button>
            <Conditions
                responseObj={responseObj}
                />
        </div>
    );
};

export default Forecast;