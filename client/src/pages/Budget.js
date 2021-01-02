import React, { useState, useEffect } from "react";
import BudgetChart from "../components/BudgetChart"
import Axios from "axios";

export default function Budget() {
    const [user, setUser] = useState();
    const [budgetUpdate, setBudgetUpdate] = useState({maxBudget: 0, airFare: 0, dining: 0, lodging: 0, misc: 0});

    useEffect(() => {
        getUser();
    }, [])
    const handleSetBudget = (e) => {
        const { name, value } = e.target;
        if (isNaN(value)) {
            setBudgetUpdate({...budgetUpdate, [name]: 0});
        } else {
            setBudgetUpdate({...budgetUpdate, [name]: value});
        }
    }

    const getUser = () => {
        Axios({
          method: "GET",
          withCredentials: true,
          url: "/api/user",
        }).then((res) => {
            setUser(res.data.username)
        })
    }

    const handleUpdate = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: `/api/${user}`
        }).then((res) => {
            const oldBudget = res.data.budget;
            Axios.put(`/api/${user}`, {
                "budget": {
                    "maxBudget": parseInt(oldBudget.maxBudget) + parseInt(budgetUpdate.maxBudget),
                    "airFare": parseInt(oldBudget.airFare) + parseInt(budgetUpdate.airFare),
                    "dining": parseInt(oldBudget.dining) + parseInt(budgetUpdate.dining),
                    "lodging": parseInt(oldBudget.lodging) + parseInt(budgetUpdate.lodging),
                    "misc": parseInt(oldBudget.misc) + parseInt(budgetUpdate.misc)
                }
            }).then((result) => console.log("success"))
        })
    }
    return (
        <div>
            <BudgetChart />
            <div>
                <p>Increase Max Budget</p>
                <input type="number" name="maxBudget" onChange={handleSetBudget} placeholder="0.00"></input>
                <p>Airfare</p>
                <input type="number" name="airFare" onChange={handleSetBudget} placeholder="0.00"></input>
                <p>Dining</p>
                <input type="number" name="dining" onChange={handleSetBudget} placeholder="0.00"></input>
                <p>Lodging</p>
                <input type="number" name="lodging" onChange={handleSetBudget} placeholder="0.00"></input>
                <p>Miscellaneous Purchases</p>
                <input type="number" name="misc" onChange={handleSetBudget} placeholder="0.00"></input>
                <input type="submit" onClick={handleUpdate}></input>
            </div>
        </div>
    )
}