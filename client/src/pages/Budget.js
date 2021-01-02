import React, { useState, useEffect } from "react";
import BudgetChart from "../components/BudgetChart"
import Axios from "axios";

export default function Budget() {
    const [userBudget, setUserBudget] = useState({});
    const [budgetUpdate, setBudgetUpdate] = useState({maxBudget: 0, airFare: 0, dining: 0, lodging: 0, misc: 0});

    useEffect(() => {
        getUserBudget();
    }, [])
    
    useEffect(() => {
        getUserBudget();
    }, [userBudget])

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
              Axios({
                method: "GET",
                withCredentials: true,
                url: `/api/${user}`
            })
            .then((result) => {
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
            }).then((result) => console.log("success"))
        })
    }
    return (
        <div>
            <BudgetChart budget={userBudget} remaining={userBudget.maxBudget - userBudget.airFare - userBudget.dining - userBudget.lodging - userBudget.misc}/>
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