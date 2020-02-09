import React from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'




const DashboardYearsRelease = (props) =>  {

  const { years } = props
//   const BarChart = rd3.createBarChart;
//   const RD3Component = rd3.Component;
//   const dataYears = [
//       {label: apples, value: 25},
//       {label: oranges, value: 30},
//       {label: surfboards, value: 150}
//     ];

const options = {
    chart: {
        type: 'area'
    },
 
    title: {
        text: 'Collection by release year'
    },
   
    xAxis: {
        allowDecimals: false,
        labels: {
            formatter: function () {
                return this.value; // clean, unformatted number for year
            }
        },
        accessibility: {
            rangeDescription: 'Range: 1940 to 2017.'
        }
    },
    yAxis: {
        title: {
            text: 'Nuclear weapon states'
        },
        labels: {
            formatter: function () {
                return this.value / 1000 + 'k';
            }
        }
    },
    tooltip: {
        pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
        area: {
            pointStart: 1940,
            marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    },
    series: [{
        name: 'USA',
        data: [
            null, null, null, null, null, 6, 11, 32, 110, 235,
            369, 640, 1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468,
            20434, 24126, 27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342,
            26662, 26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
            24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586, 22380,
            21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950, 10871, 10824,
            10577, 10527, 10475, 10421, 10358, 10295, 10104, 9914, 9620, 9326,
            5113, 5113, 4954, 4804, 4761, 4717, 4368, 4018
        ]
    }]
};


  console.log(years)

  return (
    <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
  );
};

export default DashboardYearsRelease;
