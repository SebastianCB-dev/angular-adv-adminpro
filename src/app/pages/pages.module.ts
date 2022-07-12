import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router'

import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    ProgressComponent,
    PagesComponent,
    Grafica1Component,
    DashboardComponent,
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    Grafica1Component,
    ProgressComponent
  ],
  imports: [
    CommonModule, // *NgFor, *NgIf, etc.
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
