import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'qs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {

  routes: Object[] = [{
      title: 'Inicio',
      route: '/',
      icon: 'dashboard',
    }, {
      title: 'Interactuar',
      route: '/interacciones',
      icon: 'view_quilt',
    }, {
      title: 'Emails',
      route: '/templates/email',
      icon: 'email',
    },{
     title: 'Mi Cuenta',
     route: '/perfil',
     icon: 'account_circle',
     },{
      title: 'Administrador',
      route: '/users',
      icon: 'people',
    }
  ];

  constructor(private _router: Router) {}

  logout(): void {
    this._router.navigate(['/login']);
  }
}
