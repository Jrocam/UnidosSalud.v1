import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  viewProviders: [ UsersService ]
})
export class PerfilComponent implements OnInit {
  user: any;
  vacio: boolean = true;
  constructor(private _usersService: UsersService) {}

  getPerfil(filterTitle: string =''): void{
    this.user = this.user.filter((items: any) => {
      return items.displayName.toLowerCase().indexOf(filterTitle.toLowerCase()) > -1;
    });
    this.vacio = this.user.length === 0;
  }
  ngOnInit(): void {
    console.log("IniUser="+this.user);
    this._usersService.query().subscribe((users: Object[]) => {
      this.user = users;
      console.log(this.user);
      let local = localStorage.getItem('currentUser');
      console.log(local);
      let ar = local.split('"',4);
      console.log(ar);
      let usuario = ar[3];
      console.log(usuario);
      this.getPerfil(usuario);
      console.log(this.user);
    }, (error: Error) => {
      this._usersService.staticQuery().subscribe((users: Object[]) => {
        this.user = users;
      });
    });
  }
  goBack(): void {
    window.history.back();
  }
  save(): void{
    console.log("saving");
  }
}
