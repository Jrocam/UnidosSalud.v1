import { Component, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { TdMediaService } from '@covalent/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'qs-dashboard-product',
  templateUrl: './dashboard-product.component.html',
  styleUrls: ['./dashboard-product.component.scss'],
  viewProviders: [ UsersService ],
})
export class DashboardProductComponent implements AfterViewInit {
  usere: any;
  title: string;
  mostrarAdmin: boolean =false;
  constructor(private _titleService: Title,
              private _usersService: UsersService,
              public media: TdMediaService) { }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    this._titleService.setTitle( 'Temas de Interés' );
    this.title = this._titleService.getTitle();
    let local = localStorage.getItem('currentUser');
    let ar = local.split('"',4);
    let email = ar[3];
    this._usersService.query().subscribe((users: Object[]) => {
      this.usere = users;
      console.log(this.usere);
      this.getYou(email);
    });
  }
  getYou(filterTitle: string =''): void{
    this.usere = this.usere.filter((items: any) => {
      return items.email.toLowerCase().indexOf(filterTitle.toLowerCase()) > -1;
    });
    this.usere = this.usere[0];
    console.log(this.usere);
    if(this.usere){
      if(this.usere.siteAdmin){
        this.mostrarAdmin = true;
        console.log("Es admin");
      }else{
        console.log("No es admin.");
      }
    }
  }
}
