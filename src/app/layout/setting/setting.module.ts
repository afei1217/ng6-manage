import { NgModule } from '@angular/core';
import { ShareModule } from '../../shared/share.module';
import { RouterModule } from '@angular/router';
import { settingRouter } from './setting.router';
import { AdminSetComponent } from './admin-set/admin-set.component';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(settingRouter)
  ],
  declarations: [AdminSetComponent]
})
export class SettingModule { }
