import { HomeComponent } from "./home.component";

export const homeRouter = [
  {
    path:'',
    component:HomeComponent,
    children: [
      { path:'',redirectTo:'dashboard',pathMatch:'full' },
      { path:'dashboard', loadChildren:'../dashboard/dashboard.module#DashboardModule' },
      { path:'dataManage', loadChildren:'../data-manage/data-manage.module#DataManageModule' },
      { path:'dataAdd', loadChildren:'../data-add/data-add.module#DataAddModule' },
      { path:'chart', loadChildren:'../chart/chart.module#ChartModule' },
      { path:'edit', loadChildren:'../edit/edit.module#EditModule' },
      { path:'setting', loadChildren:'../setting/setting.module#SettingModule' },
      { path:'info', loadChildren:'../info/info.module#InfoModule' }
    ]
  }
]