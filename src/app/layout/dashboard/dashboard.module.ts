import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { ShareModule } from '../../shared/share.module';
import { RouterModule } from '@angular/router';
import { dashboardRouter } from './dashboard.router';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(dashboardRouter)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
