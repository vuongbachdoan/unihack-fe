import { style } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.scss']
})
export class CostComponent {
  series!: ApexAxisChartSeries;
  chart!: ApexChart;
  dataLabels!: ApexDataLabels;
  plotOptions!: ApexPlotOptions;
  yaxis!: ApexYAxis;
  xaxis!: ApexXAxis;
  fill!: ApexFill;
  tooltip!: ApexTooltip;
  stroke!: ApexStroke;
  legend!: ApexLegend;

  constructor() {
    this.initChartData();
  }

  initChartData(){
    this.series = [
      {
        name: "Total billing",
        data: [350000, 410000, 360000, 260000, 450000, 480000, 520000, 530000, 410000],
        color: '#D1F248',
      },   
    ]

    this.chart = {
      type: "bar",
      height: 350
    }
    this.plotOptions = {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      }
    },
    this.dataLabels = {
      enabled: false
    }
    this.stroke = {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    this.xaxis = {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct"
      ],
      labels: {
        style: {
          colors: 'white',
        },
      },
    },
    this.yaxis = {
      title: {
        text: "(vnd)",
        style: {
          color: 'white',
          fontSize: '12px',
          fontWeight: '300',
        },
      },
      labels: {
        style: {
          colors: 'white',
        },
      },
    },
    this.fill = {
      opacity: 1
    },
    this.tooltip = {
      y: {
        formatter: function(val) {
          return val + " vnd";
        }
      }
    }
  }
}
