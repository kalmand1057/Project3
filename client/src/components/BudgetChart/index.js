import React, {useState, useEffect} from "react";
import Axios from "axios";
import Chart from "react-google-charts";

export default function BudgetChart() {
    const [budget, setBudget] = useState("");

    useEffect(() => {
        getBudget()
    }, [])

    const getBudget = () => {
        Axios({
          method: "GET",
          withCredentials: true,
          url: "/api/budget",
        }).then((res) => {
            const result = res.data.budget
            const remainingBudget = result.maxBudget - result.airFare - result.dining - result.lodging - result.misc 
            const getBudget = {
                maxBudget: result.maxBudget,
                airFare: result.airFare,
                dining: result.dining,
                lodging: result.lodging,
                misc: result.misc,
                remaining: remainingBudget
            }
            setBudget(getBudget)
        });
      };

    return(
        <div style={{background: "rgba(128, 128, 128, 0.5)", width: "30rem", borderRadius: ".5rem"}}>
            <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Task', 'Total Budget'],
                ["Air Fare", budget.airFare],
                ['Dining', budget.dining],
                ['Lodging', budget.lodging],
                ['Misc', budget.misc],
                ['Remaining', budget.remaining],
            ]}
            options={{
                title: `Total Budget of $${budget.maxBudget}`,
                // Just add this option
                is3D: true,
                backgroundColor: "transparent"
            }}
            rootProps={{ 'data-testid': '2' }}
            />
        </div>
    )
}