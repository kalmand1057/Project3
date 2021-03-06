import React, { useState, useEffect } from "react";
import BudgetChart from "../components/BudgetChart"
import Axios from "axios";
import { Form, Header } from "semantic-ui-react";

const styles = {
    color: {
        color: "white"
    },
    heading: {
        margin: 90
    },
    fix: {
        height: "100vh",
    },
    big: {
        fontSize: 35,
        textShadow: "0 0 3px #696969"
    },
    box: {
        opacity: 0.7
    },
    graph: {
        padding: 30
    }
}

export default function Budget() {
    const [userBudget, setUserBudget] = useState({});
    const [budgetUpdate, setBudgetUpdate] = useState({maxBudget: 0, airFare: 0, dining: 0, lodging: 0, misc: 0});

    useEffect(() => {
        console.log("calling get user budget")
        getUserBudget();
        console.log("calling get user budget after")

    }, [])
    


    const handleSetBudget = (e) => {
        const { name, value } = e.target;
        if (isNaN(value)) {
            setBudgetUpdate({...budgetUpdate, [name]: 0});
        } else {
            setBudgetUpdate({...budgetUpdate, [name]: value});
        }
    }
    const getUserBudget = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "/api/user",
          }).then((res) => {
              const user = res.data.username
              console.log("intial call")
              Axios({
                method: "GET",
                withCredentials: true,
                url: `/api/${user}`
            })
            .then((result) => {
                console.log("setting state")

                setUserBudget(result.data.budget)
            })
        })
    }

    const handleUpdate = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: `/api/user`
        }).then((user) => {
            Axios.put(`/api/${user.data.username}`, {
                "budget": {
                    "maxBudget": parseInt(userBudget.maxBudget) + parseInt(budgetUpdate.maxBudget),
                    "airFare": parseInt(userBudget.airFare) + parseInt(budgetUpdate.airFare),
                    "dining": parseInt(userBudget.dining) + parseInt(budgetUpdate.dining),
                    "lodging": parseInt(userBudget.lodging) + parseInt(budgetUpdate.lodging),
                    "misc": parseInt(userBudget.misc) + parseInt(budgetUpdate.misc)
                }
            }).then((result) => getUserBudget())
        })
    }
    return (
    <div style={styles.fix}>
        <div style={styles.heading}>
            <div className="ui stackable two column centered grid">
                <Header as='h1' inverted dividing style={styles.big}>Budget</Header>
                <div className="two column row centered">
                    <div className="column">
                        <Form>
                            <Form.Group widths="equal">
                                <Form.Field>
                                    <label style={styles.color}>Increase Max Budget</label>
                                    <input type="number" name="maxBudget" onChange={handleSetBudget} placeholder="0.00" style={styles.box} />
                                    
                                    <label style={styles.color}>Airfare*</label>
                                    <input type="number" name="airFare" onChange={handleSetBudget} placeholder="0.00" style={styles.box} />
                                
                                    <label style={styles.color}>Dining*</label>
                                    <input type="number" name="dining" onChange={handleSetBudget} placeholder="0.00" style={styles.box} />
                                
                                    <label style={styles.color}>Lodging*</label>
                                    <input type="number" name="lodging" onChange={handleSetBudget} placeholder="0.00" style={styles.box} />
                                    
                                    <label style={styles.color}>Miscellaneous Purchases*</label>
                                    <input type="number" name="misc" onChange={handleSetBudget} placeholder="0.00" style={styles.box} />
                                    <p style={styles.color}>*These values subtract from your Max Budget</p>
                                </Form.Field>
                            </Form.Group>
                        </Form>
                        <button className="ui inverted button"  onClick={handleUpdate}>Submit</button>
                    </div>

                    <div className="column">
                        <div style={styles.graph}>
                            <BudgetChart budget={userBudget} remaining={userBudget.maxBudget - userBudget.airFare - userBudget.dining - userBudget.lodging - userBudget.misc} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}