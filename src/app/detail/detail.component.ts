import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { ItemsService } from '../services';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'qs-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  viewProviders: [ ItemsService, UsersService ],
})
export class DetailComponent implements OnInit {

  user: any;
  vacio: boolean = true;
  constructor(private _router: Router, private _usersService: UsersService , private _itemsService: ItemsService, private _route: ActivatedRoute) {}

  goBack(): void {
    this._router.navigate(['/interacciones']);
  }
  getUser(filterTitle: number): void{
    this.user = this.user.filter( items => items.id === filterTitle);
    if(this.user[0]){
      this.user = this.user[0];
    }
    this.vacio = this.user.length === 0;
  }
  ngOnInit(): void {
    console.log("IniUser="+this.user);
    this._route.params.subscribe((params: {id: string}) => {
      this._usersService.query().subscribe((users: Object[]) => {
        this.user = users;
        console.log(this.user);
        let  index = +params.id;
        console.log("numero:"+index);
        this.getUser(index);
        console.log(this.user);
      }, (error: Error) => {
        this._usersService.staticQuery().subscribe((users: Object[]) => {
          this.user = users;
        });
      });
    });
  }
}
