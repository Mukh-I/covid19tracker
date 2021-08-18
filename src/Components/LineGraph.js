import React, { useState, useEffect} from 'react'
import { Line } from  'react-chartjs-2'
import numeral from 'numeral'
import '../Styles/LineGraph.css'

function LineGraph(props) {

const country = props.country
const handleClick = props.handleClick

console.log(handleClick)
console.log(country)
    const [lineData, setLineData] = useState({})


    const fixedData = (lineData, casesType='cases') => {
        let lineChartData = []
        let lastDatapoint;
        for (let date in lineData.cases) {
            if (lastDatapoint) {
                let newDataPoint = {
                    x: date,
                    y: lineData[casesType][date] - lastDatapoint
                };
                lineChartData.push(newDataPoint)
            }

            lastDatapoint = lineData[casesType][date]
        }
        return lineChartData
    }

    //https://disease.sh/v3/covid-19/historical/all?lastdays=90

   console.log(country)
   console.log(props.handleClick)

    useEffect(() => {
        const fetchGraphData = async () => {

         
            await fetch(`https://disease.sh/v3/covid-19/historical/${country}?lastdays=90`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.country)
                console.log(country)
                let lineChartData = fixedData(data.timeline, handleClick)
                setLineData(lineChartData)

            })

            console.log(lineData)
        }
      fetchGraphData()
    }, [country, handleClick])

    console.log(country)
   
    const options = {
        legend: {
          display: true,
        },
        elements: {
          point: {
            radius: 0,
          },
        },
        maintainAspectRatio: false,
        tooltips: {
          mode: "index",
          intersect: false,
          callbacks: {
            label: function (tooltipItem, data) {
              return numeral(tooltipItem.value).format("+0,0");
            },
          },
        },
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                format: "MM/DD/YY",
                tooltipFormat: "ll",
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                // Include a dollar sign in the ticks
                callback: function (value, index, values) {
                  return numeral(value).format("0a");
                },
              },
            },
          ],
        },
      };
    return (
        <div className="lineGraph">
        <h4>Graph Showing {handleClick} data</h4>
        {lineData?.length > 0 && (
            <Line data={{
                datasets: [{
                    backgroundColor: 'rgba(204,16,52, 0.5)',
                    borderColor: '#CC1034',
                    label: `${handleClick} Increase In last 90 days`,
                    data: lineData
                }],
               
            }}
            options={options}
            />
        )}
        
          
        </div>
    )
}

export default LineGraph
