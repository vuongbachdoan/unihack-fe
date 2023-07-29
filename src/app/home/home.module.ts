import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import { ChartModule } from 'primeng/chart';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgApexchartsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
