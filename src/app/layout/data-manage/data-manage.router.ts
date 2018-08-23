import { UserlistComponent } from "./userlist/userlist.component";
import { ShoplistComponent } from "./shoplist/shoplist.component";
import { FoodlistComponent } from "./foodlist/foodlist.component";
import { OrderlistComponent } from "./orderlist/orderlist.component";
import { AdminlistComponent } from "./adminlist/adminlist.component";

export const dataManageRouter = [
  { path:'userlist', component:UserlistComponent, data:['数据管理', '用户列表'] },
  { path:'shoplist', component:ShoplistComponent, data:['数据管理', '商家列表'] },
  { path:'foodlist', component:FoodlistComponent, data:['数据管理', '食品列表'] },
  { path:'orderlist', component:OrderlistComponent,data:['数据管理', '订单列表'] },
  { path:'adminlist', component:AdminlistComponent, data:['数据管理', '管理员列表'] }
]