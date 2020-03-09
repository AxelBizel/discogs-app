import React, { useRef, useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const DashboardYearsRelease = years => {
  const svgRef = useRef();
  let yearsArray = years.years.map(y => {
    return y ? y : 0;
  });
  let firstYear = yearsArray.findIndex((y, i) => y > 0 && i > 0);

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
        pointStart: firstYear,
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 3,
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
        data: yearsArray.slice(firstYear)
      }
    ]
  };

  return (
    <div style={{ width: "100%" }}>
      <svg ref={svgRef}></svg>
      {yearsArray ? (
        <HighchartsReact highcharts={Highcharts} options={options} />
      ) : (
        <FontAwesomeIcon icon={faSpinner} spin />
      )}
    </div>
  );
};
export default DashboardYearsRelease;
