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
  profile(first_name: string, last_name: string, role:string, institution:string, password:string, interests:string): Observable<boolean>{
    let body = JSON.stringify({ first_name: first_name, last_name: last_name, role:role, institution:institution, password:password, interests:interests });
    let headers = new Headers();
    let local = localStorage.getItem('currentUser');
    let ar = local.split('"',8);
    let llave = ar[7];
    //append 2 items?
    headers.append('Content-Type', 'application/json');
    headers.append( 'Authorization', 'Token '+ llave);
    return this.http.post('http://salud-web.herokuapp.com/api/profile', body,{headers:headers}).map((response: Response) => {
      // login successful if there's a jwt token in the response
      if (response) {
        console.log(response);
        console.log("ENVIO DE PERFIL SUCCESSFULL");
        return true;
      } else {
        console.log("NO DEVOLVIÓ NADA");
        // return false to indicate failed login
        return false;
      }
    });
  }
  interaction(usual: string){
    let body = JSON.stringify({ receiver:usual});
    let headers = new Headers();
    let local = localStorage.getItem('currentUser');
    let ar = local.split('"',8);
    let llave = ar[7];
    headers.append('Content-Type', 'application/json');
    headers.append( 'Authorization', 'Token '+ llave);
    return this.http.put('http://salud-web.herokuapp.com/api/interact', body,{headers:headers}).map((response: Response) => {
      // login successful if there's a jwt token in the response
      if (response) {
        console.log(response);
        console.log("se sumó una interacción al usuario.");
        return true;
      } else {
        console.log("NO envió NADA");
        // return false to indicate failed login
        return false;
      }
    });
  }
}
