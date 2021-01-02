import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";
import axios from "axios";
import { Form } from 'semantic-ui-react';

const Forecast = () => {
    let [city, setCity] = useState("");
    let [unit, setUnit] = useState("imperial");
    let [responseObj, setResponseObj] = useState({});
    const options = {
        method: "GET",
        url: "https://community-open-weather-map.p.rapidapi.com/weather",
        params: {
          q: city,
          lat: '0',
          lon: '0',
          id: '2172797',
          lang: 'null',
          units: unit,
          mode: 'xml, html'
        },
        headers: {
          'x-rapidapi-key': 'f30827c038mshe9a8b31a25c3193p15c010jsn00699ab3d33e',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
      };
    function getForecast (e) {
        e.preventDefault();
        axios.request(options).then(function (response) {
            console.log(response);
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
            <h2 style={{textAlign: "center"}}>Find Current Weather Conditions</h2>
            <Form onSubmit={getForecast}>
                <Form.Field>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                </Form.Field>
                <Form.Field inline>
                    <label>
                        <input
                            type="radio"
                            name="units"
                            checked={unit === "imperial"}
                            value="imperial"
                            onChange={(e) => setUnit(e.target.value)}
                            />
                        <p style={{color: "white"}}>Fahrenheit</p>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="units"
                            checked={unit === "metric"}
                            value="metric"
                            onChange={(e) => setUnit(e.target.value)}
                            />
                        <p style={{color: "white"}}>Celcius</p>
                    </label>
                </Form.Field>

                <button type="submit" className="ui inverted button">Get Forecast</button>

            </Form>
            <Conditions
                responseObj={responseObj}
                />
        </div>
    );
};

export default Forecast;