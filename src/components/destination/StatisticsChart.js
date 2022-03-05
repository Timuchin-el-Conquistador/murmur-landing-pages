import Chart from "react-apexcharts";
import React, { Component } from "react";
import '../../assets/styles/destination/chart.css'

class Statistics_Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "apexchart-example",
        },
        colors: ["#3F2B89"],
        stroke: {
          curve: "smooth",
          width: 2,
        },
        dataLabels: {
          enabled: false,
        },
   
        markers: {
          size: 5,
          hover: {
            size: 9
          }
        },
        xaxis: {
          categories: ["June", '', "July",'', "August",'', "September"],
          labels: {
            style: {
              colors: [
                "#8F9BB3",
                "#8F9BB3",
                "#8F9BB3",
                "#8F9BB3",
                "#8F9BB3",
                "#8F9BB3",
                "#8F9BB3",
              ],
              fontSize: "12",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },

      },
      series: [
        {
          name: "Raised money",
          data: [1500, 3000, 5000, 7000, 9000, 11000, 13000],
        },
      ],
    };
  }
  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          width="100%"
          height={197}
        />
      </div>
    );
  }
}

export default Statistics_Chart;
