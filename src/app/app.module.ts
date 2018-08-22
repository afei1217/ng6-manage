import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 将一些常用的module放在share中统一引入
import { ShareModule } from './shared/share.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultInterceptor } from './core/net/default.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ShareModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:DefaultInterceptor,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
