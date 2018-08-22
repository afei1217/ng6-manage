import { UserlistComponent } from "./userlist/userlist.component";
import { ShoplistComponent } from "./shoplist/shoplist.component";
import { FoodlistComponent } from "./foodlist/foodlist.component";
import { OrderlistComponent } from "./orderlist/orderlist.component";
import { AdminlistComponent } from "./adminlist/adminlist.component";

export const dataManageRouter = [
  { path:'userlist',component:UserlistComponent },
  { path:'shoplist',component:ShoplistComponent },
  { path:'foodlist',component:FoodlistComponent },
  { path:'orderlist',component:OrderlistComponent },
  { path:'adminlist',component:AdminlistComponent }
]