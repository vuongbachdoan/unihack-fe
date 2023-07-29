import { Component } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexStroke,
} from 'ng-apexcharts';

import * as mock from '../mock/tenDayRecorded';
import { MountainChart } from '../shared/models/chart.model';
import { StateObservable } from '@ngrx/store';
const dataMock = mock.oneDayRecordedMock;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  listDevice: MountainChart[] = [];

  // series!: ApexAxisChartSeries;
  // chart!: ApexChart;
  // dataLabels!: ApexDataLabels;
  // markers!: ApexMarkers;
  // title!: ApexTitleSubtitle;
  // fill!: ApexFill;
  // yaxis!: ApexYAxis;
  // xaxis!: ApexXAxis;
  // tooltip!: ApexTooltip;
  // stroke!: ApexStroke;

  constructor() {
    this.renderListDevice();
    
  }

  public async renderListDevice() {
    for await (const device of dataMock) {
      this.initChartData(device);
    }
  }

  public initChartData(device: any): void {
    let historyData = device.history;

    let dates = [];
    for (let i = 0; i < historyData.length; i++) {
      let time = String(historyData[i].dateTime);
      dates.push([historyData[i].dateTime, historyData[i].value]);
    }

    let oneItem: MountainChart = {
      series: [
        {
          name: 'Electric usage',
          data: dates,
          color: '#D1F248',
        },
      ],
      chart: {
        type: 'area',
        stacked: false,
        height: 350,

        zoom: {
          type: 'x',
          enabled: false,
          autoScaleYaxis: false,
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#F44336', '#E91E63', '#9C27B0'],
        },
      },
      markers: {
        size: 0,
      },
      title: {
        text: 'Energy usage today of ' + device.nameDevice,
        align: 'left',
        style: {
          color: 'white',
          fontSize: '12px',
          fontWeight: '300',
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      stroke: {
        width: 1, // Set the width to a smaller value to make the line thinner
      },
      yaxis: {
        labels: {
          style: {
            colors: 'white',
          },
          formatter: function (val) {
            return val.toFixed(0);
          },
        },
        title: {
          text: 'kWh',
          style: {
            color: 'white',
            fontWeight: '300',
            fontSize: '10px',
          },
        },
      },
      xaxis: {
        labels: {
          format: 'HH:mm',
          style: {
            colors: 'white',
            fontWeight: '100',
            fontSize: '10px',
          },
        },
        type: 'datetime',
        tooltip: {
          formatter: function (value) {
            return new Date(value).toLocaleTimeString();
          }
        }
      },
      tooltip: {
        theme: 'dark',
        shared: false,
        y: {
          formatter: function (val) {
            return val.toFixed(0);
          },
        },
      },
    };

    this.listDevice.push(oneItem);
  }
}
