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

  for (let i = 0; i < stylesArray.length; i++) {
    if (graphLabels.includes(stylesArray[i])) {
      graphValues[graphLabels.indexOf(stylesArray[i])] += 1
    } else {
      graphLabels.push(stylesArray[i])
      graphValues.push(1)
    }
  }

  if (graphLabels[0].length === 0) {
    graphLabels = graphLabels.slice(1)
    graphValues = graphValues.slice(1)
  }

  const data = {
    labels: graphLabels,
    datasets: [
      {
        label: 'Nombre de disques dans la collection',
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
    <>
      {' '}
      {styles ? (
        <HorizontalBar data={data} width={100} height={360} />
      ) : (
        <FontAwesomeIcon icon={faSpinner} spin />
      )}
    </>
  )
}
export default DashboardStyles
