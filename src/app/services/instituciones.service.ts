import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class InstitucionesService{
  private headers = new Headers({'Content-Type':'application/json'});
  private urlpost = '';
  constructor() { }

}
