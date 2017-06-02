import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentCoreModule } from '@covalent/core';
import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users/form/form.component';
import { LogsComponent } from './logs/logs.component';
import { FormComponent } from './form/form.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { DashboardProductComponent } from './interacciones/dashboard-product.component';
import { ProductOverviewComponent } from './interacciones/overview/overview.component';
import { ProductStatsComponent } from './interacciones/stats/stats.component';
import { ProductFeaturesComponent } from './interacciones/features/features.component';
import { FeaturesFormComponent } from './interacciones/features/form/form.component';
import { TemplatesComponent } from './templates/templates.component';
import { DashboardTemplateComponent } from './templates/dashboard/dashboard.component';
import { EmailTemplateComponent } from './templates/email/email.component';
import { EditorTemplateComponent } from './templates/editor/editor.component';
import { appRoutes, appRoutingProviders } from './app.routes';
import { RequestInterceptor } from '../config/interceptors/request.interceptor';
import { NgxChartsModule } from '@swimlane/ngx-charts';
//JUAN
import { InstitucionesService } from './services/instituciones.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { PerfilComponent } from './perfil/perfil.component';
import { CovalentDialogsModule } from '@covalent/core';
import { DocentesComponent } from './interacciones/docentes/docentes.component';
import { CientificosComponent } from './interacciones/cientificos/cientificos.component';
import { TecnicosComponent } from './interacciones/tecnicos/tecnicos.component';
import { AdministradoresComponent } from './interacciones/administradores/administradores.component';
import { NogubernamentalesComponent } from './interacciones/nogubernamentales/nogubernamentales.component';

const httpInterceptorProviders: Type<any>[] = [
  RequestInterceptor,
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    DashboardProductComponent,
    ProductOverviewComponent,
    ProductStatsComponent,
    ProductFeaturesComponent,
    FeaturesFormComponent,
    UsersComponent,
    UsersFormComponent,
    LogsComponent,
    FormComponent,
    DetailComponent,
    LoginComponent,
    TemplatesComponent,
    DashboardTemplateComponent,
    EmailTemplateComponent,
    EditorTemplateComponent,
    PerfilComponent,
    DocentesComponent,
    CientificosComponent,
    TecnicosComponent,
    AdministradoresComponent,
    NogubernamentalesComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CovalentCoreModule,
    CovalentDialogsModule,
    CovalentHttpModule.forRoot({
      interceptors: [{
        interceptor: RequestInterceptor, paths: ['**'],
      }],
    }),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    appRoutes,
    NgxChartsModule,

  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
    httpInterceptorProviders,
    Title,
    InstitucionesService,
    AuthGuard,
    AuthenticationService,
  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
