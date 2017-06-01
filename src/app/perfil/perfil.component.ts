import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { InstitucionesService } from '../services/instituciones.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  viewProviders: [ UsersService, InstitucionesService ]
})
export class PerfilComponent implements OnInit {
  //Models Json
  private user: any;
  private institutions: any;
  //Forms
  newName: string = '';
  newLastName: string = '';
  //Selectores
  areas: Object[] = [{
    title: 'Profesor universitario'
  }, {
    title: 'Docente de colegio'
  }, {
    title: 'Tecnico'
  },{
    title: 'Cientifico'
  },{
    title: 'No gubernamental'
  },{
    title: 'Administrador'
  }
  ];
  title: string = '';
  enabled: boolean = true;
  selectedValue: string;
  otherSelectedValue: string;
  //Chips
  readOnly: boolean = false;
  selectedChips: string;
  items: string[] = [
    'a',
    'b',
    'e'
  ];
  itemsRequireMatch: string[] = this.items.slice(0, 6);
  private putavida: any;
  private putalife: any;
  constructor(private _usersService: UsersService,
              private _institucionesService: InstitucionesService
  ) {}
  showChips(){
    console.log(this.items);
    console.log(this.itemsRequireMatch);
  }
  getPerfil(filterTitle: string =''): void{
    this.user = this.user.filter((items: any) => {
      return items.email.toLowerCase().indexOf(filterTitle.toLowerCase()) > -1;
    });
    this.user = this.user[0];
    console.log(this.user);
  }
  getInsti(algo: any): void{
    this.putavida = algo;
    console.log(this.putavida);
    this.institutions = algo;
    console.log(this.institutions);
  }
  ngOnInit(){
    console.log("IniInsti="+this.institutions);
    this._institucionesService.query().subscribe((institutions: Object[]) => {
      let algo = institutions;
      this.institutions = algo;
      this.getInsti(algo);
    },  (error: Error) => {
      this._usersService.staticQuery().subscribe((users: Object[]) => {
        this.user = users;
      });
    });
    console.log("IniUser="+this.user);
    this._usersService.query().subscribe((users: Object[]) => {
      this.user = users;
      console.log(users);
      this.putalife = users;
      console.log(this.putalife);
      let local = localStorage.getItem('currentUser');
      let ar = local.split('"',4);
      let usuario = ar[3];
      this.getPerfil(usuario);

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
