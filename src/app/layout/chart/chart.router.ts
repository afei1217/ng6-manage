import { VisitorComponent } from "./visitor/visitor.component";

export const chartRouter = [
  {
    path:'',
    redirectTo:'visitor',
    pathMatch:'full'
  },
  {
    path:'visitor',
    component:VisitorComponent,
    data: ['图表', '用户分布'],
  }
]