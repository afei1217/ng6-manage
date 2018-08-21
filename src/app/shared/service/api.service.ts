import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable()
export class ApiService {

  constructor() { }


  login(data):Observable<any>{
    


    return of('a');
  }


}
