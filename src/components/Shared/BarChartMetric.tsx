import { Component } from 'react';
import Chart from 'chart.js';

import './index.css';
class BidHistory extends Component {
  chart: any;
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.createChart();
  }

  createChart() {
    const labels = ['Ios', 'Andr', 'Vide', 'Win', 'Mac'];
    const canvas: any = this.refs.lineChart;

    const data = {
      labels,
      datasets: [
        {
          backgroundColor: 'rgb(145, 220, 90)',
          borderColor: '#8ac360',
          data: [0, 10, 5, 2, 20, 30, 45],
          pointRadius: 2,
        },
      ],
    };
    const config: any = {
      type: 'bar',
      data,
      options: {
        responsive: true,
        layout: {
          padding: {},
          margin: {},
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
          ],
        },
        tooltips: {
          enabled: true,
          backgroundColor: '#000000c4',
          bodyAlign: 'center',
          displayColors: false,
        },
      },
    };

    this.chart = new Chart(canvas, config);
  }

  render() {
    return (
      <div className="bid-history-chart">
        <canvas ref="lineChart" />
      </div>
    );
  }
}

export default BidHistory;
