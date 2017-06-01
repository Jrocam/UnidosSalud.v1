import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { HttpInterceptorService, RESTService } from '@covalent/http';
import { MOCK_API } from '../../config/api.config';

export interface IInsti {
  id: string;
  institution: string;
}

@Injectable()
export class InstitucionesService extends RESTService<IInsti>{
  constructor(private _http: HttpInterceptorService,
              public http: Http
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
    return this.http.get('http://salud-web.herokuapp.com/api/institutions',{headers:headers})
      .map((res:Response) => res.json());
  }
}
