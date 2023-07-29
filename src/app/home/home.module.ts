import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UsageComponent } from '../usage/usage.component';

@NgModule({
  declarations: [HomeComponent, DashboardComponent, UsageComponent],
  imports: [
    CommonModule,
    NgApexchartsModule,
    RouterModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
