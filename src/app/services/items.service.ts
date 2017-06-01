import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions, Response} from '@angular/http';
import { HttpInterceptorService, RESTService } from '@covalent/http';
import { MOCK_API } from '../../config/api.config';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class ItemsService extends RESTService<any> {
  public userJson:any;
  constructor(private _http: HttpInterceptorService,
              public http: Http,
              private _auth: AuthenticationService) {

    super(_http, {
      baseUrl: MOCK_API,
      path: '/items',
    });
  }
  query(): any {
    let headers = new Headers();
    let local = localStorage.getItem('currentUser');
    let ar = local.split('"',8);
    let llave = ar[7];
    console.log(llave);
    headers.append( 'Authorization', 'Token '+ llave);
    return this.http.get('http://salud-web.herokuapp.com/api/interests',{headers:headers})
      .map((res:Response) => res.json());
  }
  staticQuery(): any {
    return this._http.get('data/items.json')
    .map((res: Response) => {
      return res.json();
    });
  }

  staticGet(id: string): any {
    return this._http.get('data/items.json')
    .map((res: Response) => {
      let item: any;
      res.json().forEach((s: any) => {
        if (s.item_id === id) {
          item = s;
        }
      });
      return item;
    });
  }
}
