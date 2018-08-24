import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../shared/service/api.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private api: ApiService,
    private message:NzMessageService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ]
    });
  
    this.getUserInfo();
  }

  async submitForm() {
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[ i ].markAsDirty();
      this.loginForm.controls[ i ].updateValueAndValidity();
    }
    // 表单不合法
    if (this.loginForm.invalid) return;

    const formValue = this.loginForm.value;
    const res = await this.api.login(formValue.userName,formValue.password).toPromise();
    
    if (res.status == 1) { // 登录成功
      this.message.success("登陆成功");
      this.router.navigate(['home']);
    } else {
      this.message.error(res.message);
    }
  }

  async getUserInfo(){
    const userInfo = await this.api.getAdminInfo().toPromise();
    if (userInfo.status === 1 && userInfo.data && userInfo.data.id) {
      this.message.success("检测到您之前登录过，将自动登录");
      this.router.navigate(['home']);
    }

  }


}
