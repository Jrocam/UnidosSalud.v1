import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { TdLoadingService } from '@covalent/core';
import { UsersService } from '../services/users.service';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'qs-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  viewProviders: [ UsersService ],
})
export class DetailComponent implements OnInit {

  user: any;
  vacio: boolean = true;
  userEmail: string;
  constructor(private _router: Router, private _usersService: UsersService,
              private _route: ActivatedRoute, private _loadingService: TdLoadingService,
              public _snack: MdSnackBar) {}

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
    let local = localStorage.getItem('currentUser');
    let ar = local.split('"',4);
    let usuario = ar[3];
    this.userEmail = usuario;
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
  openSnackBar(message: string, action: string) {
    console.log("Snack?");
    this._snack.open(message,action,{
      duration: 2000,
    });
    setTimeout(() => {
      this._router.navigate(['/interacciones']);
    }, 2000);
  }
  sendIt(enviado: string){
    // this._loadingService.register();
    // setTimeout(() => {
    //   this._loadingService.resolve();
    // }, 2000);
    this._usersService.interaction(enviado).subscribe(result => {
        if (result === true) {
          //this._router.navigate(['/interacciones']);
        } else {
          console.log("wat");
        }
      });
  }
}
