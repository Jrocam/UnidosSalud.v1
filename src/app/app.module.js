"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var core_2 = require("@covalent/core");
var http_1 = require("@covalent/http");
var highlight_1 = require("@covalent/highlight");
var markdown_1 = require("@covalent/markdown");
var app_component_1 = require("./app.component");
var main_component_1 = require("./main/main.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var users_component_1 = require("./users/users.component");
var form_component_1 = require("./users/form/form.component");
var logs_component_1 = require("./logs/logs.component");
var form_component_2 = require("./form/form.component");
var detail_component_1 = require("./detail/detail.component");
var login_component_1 = require("./login/login.component");
var dashboard_product_component_1 = require("./interacciones/dashboard-product.component");
var overview_component_1 = require("./interacciones/overview/overview.component");
var stats_component_1 = require("./interacciones/stats/stats.component");
var features_component_1 = require("./interacciones/features/features.component");
var form_component_3 = require("./interacciones/features/form/form.component");
var templates_component_1 = require("./templates/templates.component");
var dashboard_component_2 = require("./templates/dashboard/dashboard.component");
var email_component_1 = require("./templates/email/email.component");
var editor_component_1 = require("./templates/editor/editor.component");
var app_routes_1 = require("./app.routes");
var request_interceptor_1 = require("../config/interceptors/request.interceptor");
var ngx_charts_1 = require("@swimlane/ngx-charts");
//JUAN
var instituciones_service_1 = require("./services/instituciones.service");
var auth_guard_1 = require("./guards/auth.guard");
var authentication_service_1 = require("./services/authentication.service");
//whatface
var httpInterceptorProviders = [
    request_interceptor_1.RequestInterceptor,
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            main_component_1.MainComponent,
            dashboard_component_1.DashboardComponent,
            dashboard_product_component_1.DashboardProductComponent,
            overview_component_1.ProductOverviewComponent,
            stats_component_1.ProductStatsComponent,
            features_component_1.ProductFeaturesComponent,
            form_component_3.FeaturesFormComponent,
            users_component_1.UsersComponent,
            form_component_1.UsersFormComponent,
            logs_component_1.LogsComponent,
            form_component_2.FormComponent,
            detail_component_1.DetailComponent,
            login_component_1.LoginComponent,
            templates_component_1.TemplatesComponent,
            dashboard_component_2.DashboardTemplateComponent,
            email_component_1.EmailTemplateComponent,
            editor_component_1.EditorTemplateComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            core_2.CovalentCoreModule,
            http_1.CovalentHttpModule.forRoot({
                interceptors: [{
                        interceptor: request_interceptor_1.RequestInterceptor, paths: ['**'],
                    }],
            }),
            highlight_1.CovalentHighlightModule,
            markdown_1.CovalentMarkdownModule,
            app_routes_1.appRoutes,
            ngx_charts_1.NgxChartsModule,
        ],
        providers: [
            app_routes_1.appRoutingProviders,
            httpInterceptorProviders,
            platform_browser_1.Title,
            instituciones_service_1.InstitucionesService,
            auth_guard_1.AuthGuard,
            authentication_service_1.AuthenticationService,
        ],
        entryComponents: [],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
