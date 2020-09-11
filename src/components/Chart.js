import ReactApexChart from "react-apexcharts";
import React from "react";
import { Waypoint } from "react-waypoint";

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [0, 0, 0, 0],

      options: {
        chart: {
          height: 350,
          type: "radialBar",
          animations: {
            enabled: true,
          },
        },
        colors: ["#14d4e0", "#0E949C", "#085459", "#042A2C"],
        plotOptions: {
          radialBar: {
            track: {
              background: "#ffffff",
              opacity: 1,
            },
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            dataLabels: {
              name: {
                fontSize: "22px",
                color: "#fc5185",
              },
              value: {
                fontSize: "16px",
                formatter: function (val) {
                  return `${val / 10} / 10`;
                },
              },
            },
          },
        },
        labels: ["Frontend", "Backend", "Game Dev", "Machine Learning"],
        legend: {
          show: true,
          floating: true,
          fontSize: "16px",
          position: "left",
          offsetX: 0,
          offsetY: 15,
          labels: {
            colors: ["#fc5185"],
          },
        },
      },
    };
  }

  render() {
    return (
      <Waypoint
        onEnter={() => this.setState({ series: [90, 70, 60, 60] })}
        topOffset="40%"
        bottomOffset="40%"
      >
        <div id="chart" className="mb-8">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={350}
          />
        </div>
      </Waypoint>
    );
  }
}

export default Chart;
