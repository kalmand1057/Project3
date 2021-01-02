import React, {useState, useEffect} from "react";
import Axios from "axios";
import Chart from "react-google-charts";

export default function BudgetChart(props) {
    return(
        <div style={{background: "rgba(128, 128, 128, 0.5)", width: "30rem", borderRadius: ".5rem"}}>
            <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Task', 'Total Budget'],
                ["Air Fare", props.budget.airFare],
                ['Dining', props.budget.dining],
                ['Lodging', props.budget.lodging],
                ['Misc', props.budget.misc],
                ['Remaining', props.remaining],
            ]}
            options={{
                title: `Total Budget of $${props.budget.maxBudget}`,
                // Just add this option
                is3D: true,
                backgroundColor: "transparent"
            }}
            rootProps={{ 'data-testid': '2' }}
            />
        </div>
    )
}