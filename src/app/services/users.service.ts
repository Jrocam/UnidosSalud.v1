import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpInterceptorService, RESTService } from '@covalent/http';
import { MOCK_API } from '../../config/api.config';
import {AuthenticationService} from "./authentication.service";

export interface IUser {
  displayName: string;
  id: string;
  email: string;
  created: Date;
  lastAccess: Date;
  siteAdmin: number;
}

@Injectable()
export class UsersService extends RESTService<IUser> {

  constructor(private _http: HttpInterceptorService,
              public http: Http,
              public _auth: AuthenticationService

  ) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/users',
    });
  }
  query(): any {
    let headers = new Headers();
    let local = localStorage.getItem('currentUser');
    let ar = local.split('"',8);
    let llave = ar[7];
    headers.append( 'Authorization', 'Token '+ llave);
    console.log(headers);
    return this.http.get('http://salud-web.herokuapp.com/api/users',{headers:headers})
      .map((res:Response) => res.json());
  }
  staticQuery(): Observable<IUser[]> {
    return this._http.get('data/users.json')
    .map((res: Response) => {
      return res.json();
    });
  }
}
