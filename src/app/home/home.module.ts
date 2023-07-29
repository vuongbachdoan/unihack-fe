import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CostComponent } from '../cost/cost.component';
import { DevicesComponent } from '../devices/devices.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, DashboardComponent, DevicesComponent, CostComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    RouterModule,
    FormsModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
