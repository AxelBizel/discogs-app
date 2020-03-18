import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { Line } from 'react-chartjs-2'

const DashboardYearsAdded = yearsAdded => {
  let yearsAddedArray = yearsAdded.yearsAdded.sort()
  console.log(yearsAddedArray[0], typeof yearsAddedArray[0])
  let graphLabels = [
    //   new Date(yearsAddedArray[0].getYear())
    ]
  let graphValues = [0]

  for (let i = 0; i < yearsAddedArray.length; i++) {
    graphLabels.push(yearsAddedArray[i])
    graphValues.push(i)
  }


  //   let yearsArray = years.years.map(y => {
  //     return y ? y : 0;
  //   });
  //   let firstYear = yearsArray.findIndex((y, i) => y > 0 && i > 0);
  //   let graphLabels = yearsArray.map((y, i) => i).slice(firstYear);

  const data = {
    labels: graphLabels,
    datasets: [
      {
        fill: true,
        lineTension: 0.2,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: graphValues,
        label: "Nombre de disques dans la collection"
      }
    ]
  }

  const options = {
    scales: {
      xAxes: [
        {
          type: 'time',
          time: {
            unit: 'year'
          }
        }
      ],
      yAxes: [{
        ticks: {
            beginsAtZero: true,
        }
    }]
    }
  }

  return (
    <div style={{ width: '100%' }}>
      {yearsAdded ? (
        <div>
          <h3>Répartition par date d'ajout dans la collection</h3>
          <Line data={data} legend={{ display: false }} options={options} />
        </div>
      ) : (
        <FontAwesomeIcon icon={faSpinner} spin />
      )}
    </div>
  )
}
export default DashboardYearsAdded
