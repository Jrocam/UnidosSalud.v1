import { Component, AfterViewInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';
import { TdLoadingService, TdDigitsPipe } from '@covalent/core';

import { ItemsService, UsersService } from '../../services';

@Component({
  selector: 'app-cientificos',
  templateUrl: './cientificos.component.html',
  styleUrls: ['./cientificos.component.scss'],
  viewProviders: [ ItemsService, UsersService ],
})
export class CientificosComponent implements AfterViewInit {
  items: any;
  users: any;
  filterTopicos: any;
  filterUsers: any;
  ogItems: any;
  ogUsers: any;
  selectItem: string = '';
  vacio: boolean = false;
  vacioP: boolean = false;
  userEmail:string;
  constructor(private _titleService: Title,
              private _itemsService: ItemsService,
              private _usersService: UsersService,
              private _loadingService: TdLoadingService) {}

  getRecursos(){
    this._itemsService.staticQuery().subscribe( response =>{
      this.items = response;
      this.ogItems = response;
      console.log(this.items);
    })
  }
  filteredTopicos(filterTitle: string = ''): void {
    this.filterTopicos = this.ogItems;
    this.filterTopicos = this.items.filter((items: any) => {
      return items.name.toLowerCase().indexOf(filterTitle.toLowerCase()) > -1;
    });
    this.vacio = this.filterTopicos.length === 0;
  }
  SelectItem( indx: string =''): void{
    this.selectItem = indx;
  }
  filterPersonas(filterTitle: string = ''): void {
    this.users = this.ogUsers;
    this.vacioP = false;
    this._loadingService.register('users.load');
    setTimeout(() => {
      this._loadingService.resolve('users.load');
    }, 1000);
    this.users = this.users.filter((users: any) => {
      return users.topicos.toLowerCase().indexOf(filterTitle.toLowerCase()) > -1;
    });
    setTimeout(() => {
      this.vacioP = this.users.length === 0;
    }, 1200);
    this.filterUsers = this.users;
  }
  filteredUsers(filterTitle: string = ''): void {
    //this.filterUsers = this.ogUsers;
    this.filterUsers = this.users.filter((items: any) => {
      return items.displayName.toLowerCase().indexOf(filterTitle.toLowerCase()) > -1;
    });
    this.vacioP = this.filterUsers.length === 0;
  }
  filterByArea(filterTitle: string = ''): void {
    this.filterUsers = this.users.filter((items: any) => {
      return items.area.toLowerCase().indexOf(filterTitle.toLowerCase()) > -1;
    });
    this.vacioP = this.filterUsers.length === 0;
  }
  ngAfterViewInit(): void {
    //get userEmail from localStorage
    let local = localStorage.getItem('currentUser');
    let ar = local.split('"',4);
    let email = ar[3];
    this.userEmail = email;
    this.getRecursos();
    this._titleService.setTitle( 'UES Interacciones ' );
    this._loadingService.register('items.load');
    //TOPICS
    this._itemsService.query().subscribe((items: Object[]) => {
      this.items = items;
      this.ogItems = items;
      this.filterTopicos = items;
      console.log(this.items);
      setTimeout(() => {
        this._loadingService.resolve('items.load');
      }, 2000);
    }, (error: Error) => {
      this._itemsService.staticQuery().subscribe((items: Object[]) => {
        this.items = items;
        this.ogItems = items;
        this.filterTopicos = items;
        setTimeout(() => {
          this._loadingService.resolve('items.load');
        }, 2000);
      });
    });
    this._loadingService.register('users.load');
    //USERS
    this._usersService.query().subscribe((users: Object[]) => {
      this.users = users;
      this.ogUsers = users;
      this.filterUsers = users;
      this.filterByArea('cientifico');
      //yea
      setTimeout(() => {
        this._loadingService.resolve('users.load');
      }, 2000);
    }, (error: Error) => {
      this._usersService.staticQuery().subscribe((users: Object[]) => {
        this.users = users;
        this.ogUsers = users;
        this.filterUsers = users;
        setTimeout(() => {
          this._loadingService.resolve('users.load');
        }, 2000);
      });
    });
  }
}
