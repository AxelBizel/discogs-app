import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { HorizontalBar } from 'react-chartjs-2'

const DashboardStyles = styles => {
  let stylesArray = styles.styles
    .join(',')
    .split(',')
    .sort()

  let graphLabels = []
  let graphValues = []
  console.log('STYLES', styles.styles.join(',').split(','))
  console.log('STYLESARRAY', stylesArray)

  for (let i = 0; i < stylesArray.length; i++) {
    if (graphLabels.includes(stylesArray[i])) {
      graphValues[graphLabels.indexOf(stylesArray[i])] += 1
    } else {
      graphLabels.push(stylesArray[i])
      graphValues.push(1)
    }
  }

  console.log('GL', graphLabels)
  console.log('GV', graphValues)

  const data = {
    labels: graphLabels,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: graphValues
      }
    ]
  }

  return (
    <div style={{ width: '100%' }}>
      {styles ? (
        <div>
          <h3>Répartition par styles</h3>
          <HorizontalBar data={data} />
        </div>
      ) : (
        <FontAwesomeIcon icon={faSpinner} spin />
      )}
    </div>
  )
}
export default DashboardStyles
