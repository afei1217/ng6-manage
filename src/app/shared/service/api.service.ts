import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 登陆 
   */
  login(userName: string, password: string): Promise<any> {
    return this.http.post('/admin/login', { user_name: userName, password }).toPromise();
  }
  /**
  * 获取用户信息
  *  */
  getAdminInfo(): Promise<any> {
    return this.http.get('https://elm.cangdu.org/admin/info').toPromise();
  }

}
