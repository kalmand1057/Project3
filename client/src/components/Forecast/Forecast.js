import React, { useState } from "react";
import Conditions from "../Conditions/Conditions";
import axios from "axios";
import { Form } from 'semantic-ui-react';

const styles = {
    box: {
        opacity: 0.7
    }
}

const Forecast = () => {
    let [city, setCity] = useState("");
    let [unit, setUnit] = useState("imperial");
    let [responseObj, setResponseObj] = useState({});

    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
        params: {
            q: city, 
            units: unit, 
            mode: "xml, html"
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

            console.log(response.data.city);
            console.log(response.data.list[0].dt);
            console.log(response.data.list[1].dt);
            console.log(response.data.list[2].dt);
            console.log(response.data.list[0].main.temp_max);
            console.log(response.data.list[0].main.temp_min);
            console.log(response.data.list[0].weather[0].description);
            console.log(response.data.list[0].weather[0].icon);


        }).catch(function (error) {
            console.error(error);
        });
   

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
                    style={styles.box}
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