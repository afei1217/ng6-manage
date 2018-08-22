import { NgModule } from '@angular/core';
import { ShareModule } from '../../shared/share.module';
import { RouterModule } from '@angular/router';
import { chartRouter } from './chart.router';
import { VisitorComponent } from './visitor/visitor.component';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(chartRouter)
  ],
  declarations: [VisitorComponent]
})
export class ChartModule { }
