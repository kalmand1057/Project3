import React from "react";
import BudgetChart from "../components/BudgetChart"

export default function BudgetChart() {
    return (
        <div>
            <BudgetChart />
            <form action="/action_page.php">
                <label htmlFor="budget">Choose Which to update:</label>
                <select id="budget" name="budget">
                    <option value="maxBudget">Max Budget</option>
                    <option value="airFare">Air Fare</option>
                    <option value="dining">Dining</option>
                    <option value="lodging">Lodging</option>
                    <option value="misc">Miscellaneous</option>
                </select>
                <input type="number" placeholder= "0.00"></input>
                <input type="submit"/>
            </form>
        </div>
    )
}