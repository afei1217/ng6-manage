import { ShopAddComponent } from "./shop-add/shop-add.component";
import { GoodsAddComponent } from "./goods-add/goods-add.component";

export const dataAddRouter = [
  {
    path:'shopAdd',
    component:ShopAddComponent,
    data:['添加数据', '添加商铺']
  },
  {
    path:"goodsAdd",
    component:GoodsAddComponent,
    data:['添加数据', '添加商品']
  }
]