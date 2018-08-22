import { NgModule } from '@angular/core';
import { ShareModule } from '../../shared/share.module';
import { RouterModule } from '@angular/router';
import { infoRouter } from './info.router';
import { ExplainComponent } from './explain/explain.component';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(infoRouter)
  ],
  declarations: [ExplainComponent]
})
export class InfoModule { }
