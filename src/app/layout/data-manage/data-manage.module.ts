import { NgModule } from '@angular/core';
import { UserlistComponent } from './userlist/userlist.component';
import { ShareModule } from '../../shared/share.module';
import { RouterModule } from '@angular/router';
import { dataManageRouter } from './data-manage.router';
import { ShoplistComponent } from './shoplist/shoplist.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { AdminlistComponent } from './adminlist/adminlist.component';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(dataManageRouter)
  ],
  declarations: [
    UserlistComponent,
    ShoplistComponent,
    FoodlistComponent,
    OrderlistComponent,
    AdminlistComponent
  ]
})
export class DataManageModule { }
