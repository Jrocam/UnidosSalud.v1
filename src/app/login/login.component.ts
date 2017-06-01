import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TdLoadingService } from '@covalent/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'qs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{

  username: string;
  password: string;
  loading = false;
  error = '';
  constructor(private _router: Router,
              private authenticationService: AuthenticationService,
              private _loadingService: TdLoadingService) {}
  login() {
    this.loading = true;
    this._loadingService.register();
    setTimeout(() => {
      this._loadingService.resolve();
    }, 2000);
    this.authenticationService.login(this.username, this.password)
      .subscribe(result => {
        if (result === true) {
          this._router.navigate(['/']);
        } else {
          // login failed
          this.error = 'Username or password is incorrect';
          this.loading = false;
          alert('whatface'+this.error);
        }
      });
  }
  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }
}
