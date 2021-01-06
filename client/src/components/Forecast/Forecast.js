import React, { useState, useEffect } from "react";
import Conditions from "../Conditions/Conditions";
import axios from "axios";
import { Form } from 'semantic-ui-react';

const styles = {
    box: {
        opacity: 0.7
    }
}

const Forecast = (props) => {
    let [city, setCity] = useState("");
    let [unit, setUnit] = useState("imperial");
    let [responseObj, setResponseObj] = useState({});

    useEffect(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "/api/user",
          }).then((res) => {
              const user = res.data.username
              axios({
                method: "GET",
                withCredentials: true,
                url: `/api/${user}`
            })
            .then((result) => {
                setCity(result.data.city);
            })
          })

    }, [])

    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response)
            setResponseObj(response.data);
        })
    }, [city])

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
            <h2 style={{textAlign: "center"}}>Current Weather Conditions</h2>

            <Conditions
                responseObj={responseObj}
                />

            <Form onSubmit={getForecast}>
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
                    
                    <button type="submit" className="ui inverted button">Change Temperature Units</button>
                </Form.Field>

            </Form>
        </div>
    );
};

export default Forecast;