import React from "react";
import Chart from "react-google-charts";
import "./Map.css";

const Map = ({ x, y }: { x: number; y: number }) => {
  const options = {
    title: "Drone location",
    hAxis: { title: "X", minValue: 0, maxValue: 500000 },
    vAxis: { title: "Y", minValue: 0, maxValue: 500000 },
    legend: "none",
  };

  return (
    <>
      <Chart
        className="chart"
        height="325px"
        width="325px"
        loader={<p>loading...</p>}
        chartType="ScatterChart"
        options={options}
        data={[
          ["X", "Y"],
          [x, y],
        ]}
      />
    </>
  );
};

export default Map;
