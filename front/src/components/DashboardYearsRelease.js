import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const DashboardYearsRelease = years => {
  const [yearsGraph, setYearsGraph] = useState(null);
  console.log("state", yearsGraph);

  useEffect(() => {
    if (yearsArray) {
      setYearsGraph(yearsArray);
    }
  }, []);

  let yearsArray = years.years.map(i => {
    return i ? i : 0;
  });

  console.log(yearsArray);

  const options = {
    chart: {
      type: "area"
    },
    title: {
      text: "Collection by release year"
    },
    xAxis: {
      allowDecimals: false,
      labels: {
        formatter: function() {
          return this.value; // clean, unformatted number for year
        }
      },
      accessibility: {
        rangeDescription: "Range: 1969 to 2020"
      }
    },
    yAxis: {
      title: {
        text: "Nombre de disques dans la collection"
      }
    },
    tooltip: {
      pointFormat:
        "{series.name} sortis en <b>{point.x}</b><br/><b> {point.y}</b>"
    },
    plotOptions: {
      area: {
        pointStart: 1969,
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [
      {
        name: "Nombre de disques dans la collection",
        data: yearsArray.slice(1969)
      }
    ]
  };

  return (
    <div style={{ width: "100%" }}>
      {yearsGraph ? (
        <HighchartsReact highcharts={Highcharts} options={options} />
      ) : (
        <FontAwesomeIcon icon={faSpinner} spin />
      )}
    </div>
  );
};
export default DashboardYearsRelease;
