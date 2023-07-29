import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CostComponent } from '../cost/cost.component';
import { DevicesComponent } from '../devices/devices.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent, DevicesComponent, CostComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    RouterModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
