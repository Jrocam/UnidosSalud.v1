import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewContainerRef } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { UsersService } from '../services/users.service';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'qs-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  viewProviders: [ UsersService ]
})
export class MainComponent implements OnInit {

  constructor(private _router: Router,
              private _dialogService: TdDialogService,
              private _usersService: UsersService,
              private _viewContainerRef: ViewContainerRef, private _auth: AuthenticationService) {
    setInterval(() => { this._auth.ping(); }, 1000 * 60 * 20);
  }
  userEmail:string;
  logged: any;
  ngOnInit(){
    let local = localStorage.getItem('currentUser');
    let ar = local.split('"',4);
    let email = ar[3];
    this.userEmail = email;
    this._usersService.query().subscribe((users: Object[]) => {
      this.logged = users;
      console.log(users);
    });
    setTimeout(() => {
      console.log(this.logged);
      this.getYou(this.userEmail);
    }, 2000);
  }
  getYou(filterTitle: string =''): void{
    this.logged = this.logged.filter((items: any) => {
      return items.email.toLowerCase().indexOf(filterTitle.toLowerCase()) > -1;
    });
    this.logged = this.logged[0];
    console.log(this.logged);
    if(this.logged){
      console.log("it's all good");
    }else{
      console.log("No profile.");
      this.openConfirm();
    }
  }
  openConfirm(): void {
    this._dialogService.openConfirm({
      message: 'Nos dimos cuenta de que todavía no has llenado tu perfil. Deseas hacerlo ahora?',
      disableClose: true, // defaults to false
      viewContainerRef: this._viewContainerRef, //OPTIONAL
      title: 'Hola! Te damos la bienvenida', //OPTIONAL, hides if not provided
      acceptButton: 'Claro!', //OPTIONAL, defaults to 'ACCEPT'
      cancelButton: 'ahora no', //OPTIONAL, defaults to 'CANCEL'
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this._router.navigate(['/perfil']);
      } else {
        this.logout();
      }
    });
  }
  routes: Object[] = [{
      title: 'Inicio',
      route: '/',
      icon: 'dashboard',
    }, {
    title: 'Mi Cuenta',
    route: '/perfil',
    icon: 'account_circle',
    }, {
      title: 'Interactuar',
      route: '/interacciones',
      icon: 'share',
    }, {
    title: 'Emails',
    route: '/home/email',
    icon: 'email',
    }// ,{
    //   title: 'Administrador',
    //   route: '/users',
    //   icon: 'supervisor_account',
    // }
  ];
  logout(): void {
    this._router.navigate(['/login']);
  }
}
