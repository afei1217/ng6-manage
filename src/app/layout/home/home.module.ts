import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { homeRouter } from './home.router';
import { ShareModule } from '../../shared/share.module';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(homeRouter)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
