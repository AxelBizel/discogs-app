import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import rd3 from "react-d3-library";
import * as d3 from "d3";
import {AreaChart} from "react-d3-library";

const DashboardYearsD3 = years => {
  const [data, setData] = useState(null);

  const drawChart = () => {
    const data = yearsArray.slice(firstYear);
    setData(data);

    const w = '100%';
    const h = 500;
    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", w)
      .attr("height", h)
      .style("margin", 100)
      .attr("viewBox", [0, 0, "100%", '50vh']);

    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 20)
      .attr("y", (d, i) => h - 25 * d)
      .attr("width", 15)
      .attr("height", (d, i) => d * 25)
      .attr("fill", "green");

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text(d => d)
      .attr("x", (d, i) => i * 20)
      .attr("y", (d, i) => h - 10 * d - 3);
  };

  useEffect(() => {
    drawChart();
  }, []);

  const RD3Component = rd3.Component;

  let yearsArray = years.years.map(y => {
    return y ? y : 0;
  });
  let firstYear = yearsArray.findIndex((y, i) => y > 0 && i > 0);

  return (
    <div>
      {data ? (
        <AreaChart data={data} style={{ margin: "2vh 2vw" }} />
      ) : (
        <FontAwesomeIcon icon={faSpinner} spin />
      )}
    </div>
  );
};
export default DashboardYearsD3;
