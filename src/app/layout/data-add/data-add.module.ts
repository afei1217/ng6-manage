import { NgModule } from '@angular/core';
import { ShareModule } from '../../shared/share.module';
import { RouterModule } from '@angular/router';
import { dataAddRouter } from './data-add.router';
import { GoodsAddComponent } from './goods-add/goods-add.component';
import { ShopAddComponent } from './shop-add/shop-add.component';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(dataAddRouter)
  ],
  declarations: [GoodsAddComponent, ShopAddComponent]
})
export class DataAddModule { }
