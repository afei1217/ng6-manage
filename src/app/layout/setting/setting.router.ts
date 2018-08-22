import { AdminSetComponent } from "./admin-set/admin-set.component";

export const settingRouter = [
  { path:'', redirectTo:'adminSet', pathMatch:'full' },
  { path:'adminSet', component:AdminSetComponent }
]