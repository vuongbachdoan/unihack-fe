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
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }
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
      ]
    },
    this.yaxis = {
      title: {
        text: "$ (thousands)"
      }
    },
    this.fill = {
      opacity: 1
    },
    this.tooltip = {
      y: {
        formatter: function(val) {
          return "$ " + val + " thousands";
        }
      }
    }
  }
  // constructor() {
  //   this.chartOptions = {
  //     series: [
  //       {
  //         name: "Net Profit",
  //         data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  //       },
  //       {
  //         name: "Revenue",
  //         data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  //       },
  //       {
  //         name: "Free Cash Flow",
  //         data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  //       }
  //     ],
  //     chart: {
  //       type: "bar",
  //       height: 350
  //     },
  //     plotOptions: {
  //       bar: {
  //         horizontal: false,
  //         columnWidth: "55%",
  //       }
  //     },
  //     dataLabels: {
  //       enabled: false
  //     },
  //     stroke: {
  //       show: true,
  //       width: 2,
  //       colors: ["transparent"]
  //     },
  //     xaxis: {
  //       categories: [
  //         "Feb",
  //         "Mar",
  //         "Apr",
  //         "May",
  //         "Jun",
  //         "Jul",
  //         "Aug",
  //         "Sep",
  //         "Oct"
  //       ]
  //     },
  //     yaxis: {
  //       title: {
  //         text: "$ (thousands)"
  //       }
  //     },
  //     fill: {
  //       opacity: 1
  //     },
  //     tooltip: {
  //       y: {
  //         formatter: function(val) {
  //           return "$ " + val + " thousands";
  //         }
  //       }
  //     }
  //   };
  // }
}
