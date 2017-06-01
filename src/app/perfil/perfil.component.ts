import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { InstitucionesService } from '../services/instituciones.service';
import { ItemsService} from '../services/items.service';
import { TdLoadingService } from '@covalent/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  viewProviders: [ UsersService, InstitucionesService, ItemsService ]
})
export class PerfilComponent implements OnInit {

  constructor(private _usersService: UsersService,
              private _institucionesService: InstitucionesService,
              private _loadingService: TdLoadingService,
              private _router: Router,
              private _itemsService: ItemsService
  ) {}
  loading= false;
  //Models Json
  private user: any;
  private institutions: any;
  private items: any;
  //Forms
  newName: string = '';
  newLastName: string = '';
  newPassword: string = '';
  newPassword2: string = '';
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
  topics: string[] =[
    '',
   ];
  itemsRequireMatch: string[] = this.topics.slice(0, 6);
  private putalife: any;

  showChips(){
    console.log(this.topics);
    console.log(this.itemsRequireMatch);
  }
  getPerfil(filterTitle: string =''): void{
    this.user = this.user.filter((items: any) => {
      return items.email.toLowerCase().indexOf(filterTitle.toLowerCase()) > -1;
    });
    this.user = this.user[0];
    console.log(this.user);
    if(this.user){
      console.log("entro?");
      this.itemsRequireMatch= this.user.topicos.split(" ");
    }
    console.log("noentro?");
  }
  getInsti(algo: any): void{
    this.institutions = algo;
    console.log(this.institutions);
  }
  getTopic(topics: any):void{

  }
  ngOnInit(){
    //INSTITUTIONS
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
    //USER
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
    //TOPICOS
    this._itemsService.query().subscribe((ite: Object[]) => {
      this.items= ite;
      console.log(this.items);
      this.topics.pop();
      for(let top of this.items){
        this.topics.push(top.id_top);
      }
      //this.getTopic(this.items);
    }, (error: Error) => {
      this._itemsService.staticQuery().subscribe((ite: Object[]) => {
        this.items = ite;
      });
    });
  }
  goBack(): void {
    window.history.back();
  }
  save(): void{
    console.log("saving");
    this.loading = true;
    this._loadingService.register();
    setTimeout(() => {
      this._loadingService.resolve();
    }, 2000);
    let inte= this.itemsRequireMatch.toString().replace(","," ");
    console.log("nombre:"+this.newName+"apellidos"+this.newLastName+
                "role:"+this.otherSelectedValue+"institution:"+this.selectedValue+
                "interests:"+inte+"password:"+this.newPassword);
    this._usersService.profile(this.newName,this.newLastName,this.otherSelectedValue,this.selectedValue,
      this.newPassword,this.itemsRequireMatch.toString().replace(","," "))
      .subscribe(result => {
        if (result === true) {
          console.log(result);
          console.log("buen evio de perfil!");
          this._router.navigate(['/']);
        } else {
          console.log("Fallo en el envio! Contacta a un administrador.");
          //this.loading = false;
          alert('Fallo en el envio, contacta a un admin.');
        }
      });
  }
}
