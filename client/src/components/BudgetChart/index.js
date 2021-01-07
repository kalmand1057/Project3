import React from "react";
import Chart from "react-google-charts";



export default function BudgetChart(props) {
    return(
        <div style={{background: "rgba(255, 255, 255, 0.7)", width: "100%", borderRadius: ".5rem"}}>
            <Chart
            width={'100%'}
            height={'100%'}
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
                is3D: true,
                backgroundColor: "transparent"
            }}
            rootProps={{ 'data-testid': '2' }}
            />
        </div>
    )
}