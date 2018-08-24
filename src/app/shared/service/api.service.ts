import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 登陆 
   */
  login(userName: string, password: string): Observable<any> {
    return this.http.post('/admin/login', { user_name: userName, password });
  }
  /**
  * 获取用户信息
  *  */
  getAdminInfo(): Observable<any> {
    return this.http.get('https://elm.cangdu.org/admin/info');
  }

}
