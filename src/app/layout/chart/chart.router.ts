import { VisitorComponent } from "./visitor/visitor.component";

export const chartRouter = [
  {
    path:'',
    redirectTo:'visitor',
    pathMatch:'full'
  },
  {
    path:'visitor',
    component:VisitorComponent
  }
]