import { LoginComponent } from "./login/login.component";

/**
 * 这里是全局路由配置，全局路由只有2个，login和Home
 * 用户从login登录之后跳转到Home
 */
export const appRoutes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  // {
  //   path:'home',
  //   loadChildren:''
  // },
  {
    path:'**',
    redirectTo:'login',
    pathMatch:'full'
  }
]