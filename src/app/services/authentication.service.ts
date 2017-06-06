import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
@Injectable()
export class AuthenticationService {
  public token: string;
  surl: SafeResourceUrl;
  constructor(private http: Http,
              public sanitizer: DomSanitizer
  ) {
    // set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }
  login(username: string, password: string): Observable<boolean> {
    // this.surl = this.sanitizer.bypassSecurityTrustResourceUrl('http://salud-web.herokuapp.com/rest-auth/login/');
    // let url = this.surl.toString();
    let body = JSON.stringify({ username: username, password: password });
    console.log(body);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://salud-web.herokuapp.com/rest-auth/login/', body,{headers:headers}).map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json();
        if (token) {
          // set token property
          this.token = token.key;
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token.key }));
          // return true to indicate successful login
          console.log(localStorage.getItem('currentUser'));
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
    });
  }
  logout(): void {
    //Send Back-end token to destroy
    this.http.post('http://salud-web.herokuapp.com/rest-auth/logout/', JSON.stringify({ token: this.token }));
    // clear token remove user from local storage to log user out
    this.token = null;
    console.log("logout: "+ localStorage.getItem('currentUser') );
    localStorage.removeItem('currentUser');

  }
  ping(): void{
    this.http.get('http://salud-web.herokuapp.com');
    console.log("Refreshing server...");
  }
}
