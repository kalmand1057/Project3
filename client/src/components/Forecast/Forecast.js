import React, { useState, useEffect } from "react";
import Conditions from "../Conditions/Conditions";
import axios from "axios";
import { Form, Header } from 'semantic-ui-react';

const styles = {
    box: {
        opacity: 0.7
    },
    define: {
      textShadow: "0 0 3px #696969",
      textAlign: "center"
  },
  space: {
      marginLeft: "10px"
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

    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
        params: {
            q: city, 
            units: unit, 
            mode: "xml, html"
        },
        headers: {
          'x-rapidapi-key': '498f3eedbdmsh68c5a1318922907p1d8b21jsn1625e8d08302',
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
    };

    useEffect(() => {
        axios.request(options).then(function (response) {
            setResponseObj(response.data);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city])

    function getForecast (e) {
        e.preventDefault();
        axios.request(options).then(function (response) {
            setResponseObj(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    };

    return (
        <div>
            <Header as="h2" inverted dividing style={styles.define}>Current Weather Conditions</Header>

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
                    
                    <button type="submit" className="ui inverted button" style={styles.space}>Change Temperature Units</button>
                </Form.Field>

            </Form>
        </div>
    );
};

export default Forecast;