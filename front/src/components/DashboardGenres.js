import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { HorizontalBar } from 'react-chartjs-2'

const DashboardGenres = genres => {
  let genresArray = genres.genres
    .map(g => {
      for (let i = 0; i < g.length; i++) {
        if (g[i].includes('Folk')) g[i] = 'Folk/World/Country'
      }
      return g
    })
    .join(',')
    .split(',')
    .sort()

  let graphLabels = []
  let graphValues = []
 

  for (let i = 0; i < genresArray.length; i++) {
    if (graphLabels.includes(genresArray[i])) {
        graphValues[graphLabels.indexOf(genresArray[i])] +=1;
    } else {
      graphLabels.push(genresArray[i]);
      graphValues.push(1);
    }
  };

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
  };

  return (
    <div style={{ width: '100%' }}>
      {genres ? (
        <div>
          <h3>Répartition par genres</h3>
          <HorizontalBar data={data} />
        </div>
      ) : (
        <FontAwesomeIcon icon={faSpinner} spin />
      )}
    </div>
  )
}
export default DashboardGenres
