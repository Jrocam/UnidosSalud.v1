"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var main_component_1 = require("./main/main.component");
var dashboard_product_component_1 = require("./interacciones/dashboard-product.component");
var overview_component_1 = require("./interacciones/overview/overview.component");
var stats_component_1 = require("./interacciones/stats/stats.component");
var features_component_1 = require("./interacciones/features/features.component");
var form_component_1 = require("./interacciones/features/form/form.component");
var users_component_1 = require("./users/users.component");
var form_component_2 = require("./users/form/form.component");
var logs_component_1 = require("./logs/logs.component");
var detail_component_1 = require("./detail/detail.component");
var login_component_1 = require("./login/login.component");
var form_component_3 = require("./form/form.component");
var templates_component_1 = require("./templates/templates.component");
var dashboard_component_1 = require("./templates/dashboard/dashboard.component");
var email_component_1 = require("./templates/email/email.component");
var editor_component_1 = require("./templates/editor/editor.component");
var routes = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', component: main_component_1.MainComponent, children: [{
                component: templates_component_1.TemplatesComponent,
                path: '',
            },
            { path: 'interacciones', component: dashboard_product_component_1.DashboardProductComponent, children: [
                    { path: '', component: overview_component_1.ProductOverviewComponent },
                    { path: 'stats', component: stats_component_1.ProductStatsComponent },
                    { path: 'features', children: [
                            { path: '', component: features_component_1.ProductFeaturesComponent },
                            { path: 'add', component: form_component_1.FeaturesFormComponent },
                            { path: ':id/delete', component: form_component_1.FeaturesFormComponent },
                            { path: ':id/edit', component: form_component_1.FeaturesFormComponent },
                        ] },
                ] },
            { path: 'item/:id', component: detail_component_1.DetailComponent },
            { path: 'logs', component: logs_component_1.LogsComponent },
            { path: 'form', component: form_component_3.FormComponent },
            { path: 'users', children: [
                    { path: '', component: users_component_1.UsersComponent },
                    { path: 'add', component: form_component_2.UsersFormComponent },
                    { path: ':id/delete', component: form_component_2.UsersFormComponent },
                    { path: ':id/edit', component: form_component_2.UsersFormComponent },
                ] },
            { path: 'templates', children: [
                    { path: '', component: templates_component_1.TemplatesComponent },
                    { path: 'dashboard', component: dashboard_component_1.DashboardTemplateComponent },
                    { path: 'email', component: email_component_1.EmailTemplateComponent },
                    { path: 'editor', component: editor_component_1.EditorTemplateComponent },
                ] },
        ] },
];
exports.appRoutingProviders = [];
exports.appRoutes = router_1.RouterModule.forRoot(routes, { useHash: true });
