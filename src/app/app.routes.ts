import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DashboardProductComponent } from './interacciones/dashboard-product.component';
import { ProductOverviewComponent } from './interacciones/overview/overview.component';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users/form/form.component';
import { LogsComponent } from './logs/logs.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { FormComponent } from './form/form.component';
import { TemplatesComponent } from './templates/templates.component';
import { DashboardTemplateComponent } from './templates/dashboard/dashboard.component';
import { EmailTemplateComponent } from './templates/email/email.component';
import { EditorTemplateComponent } from './templates/editor/editor.component';
import { AuthGuard } from './guards/auth.guard';
import { PerfilComponent } from './perfil/perfil.component';
import { DocentesComponent } from './interacciones/docentes/docentes.component';
import { CientificosComponent } from './interacciones/cientificos/cientificos.component';
import { TecnicosComponent } from './interacciones/tecnicos/tecnicos.component';
import { AdministradoresComponent } from './interacciones/administradores/administradores.component';
import { NogubernamentalesComponent } from './interacciones/nogubernamentales/nogubernamentales.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: MainComponent,canActivate: [AuthGuard], children: [{
      component: TemplatesComponent,
      path: '',
    },
    {path: 'perfil', component: PerfilComponent},
    {path: 'interacciones', component: DashboardProductComponent, children: [
      {path: '', component: ProductOverviewComponent},
      {path: 'docentes', component: DocentesComponent},
      {path: 'cientificos', component: CientificosComponent},
      {path: 'tecnicos', component: TecnicosComponent},
      {path: 'administradores', component: AdministradoresComponent},
      {path: 'nogubernamentales', component: NogubernamentalesComponent},
    ]},
    {path: 'users/:id', component: DetailComponent},
    {path: 'logs', component: LogsComponent},
    {path: 'form', component: FormComponent},
    {path: 'users', children: [
      {path: '', component: UsersComponent},
      {path: 'add', component: UsersFormComponent},
      {path: ':id/delete', component: UsersFormComponent},
      {path: ':id/edit', component: UsersFormComponent},
    ]},
    {path: 'home', children: [
      {path: '', component: TemplatesComponent},
      {path: 'dashboard', component: DashboardTemplateComponent},
      {path: 'email', component: EmailTemplateComponent},
      {path: 'editor', component: EditorTemplateComponent},
    ]},
  ]},
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
