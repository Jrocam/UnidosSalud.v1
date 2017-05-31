"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_1 = require("./data");
var DashboardTemplateComponent = (function () {
    function DashboardTemplateComponent() {
        this.view = [700, 400];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = '';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Sales';
        this.colorScheme = {
            domain: ['#9575CD', '#4FC3F7', '#4DD0E1', '#4DB6AC', '#66BB6A', '#9CCC65'],
        };
        this.colorSchemeDark = {
            domain: ['#5E35B1', '#0277BD', '#00695C', '#558B2F', '#9E9D24'],
        };
        // line, area
        this.autoScale = true;
        // Cards
        Object.assign(this, { single: data_1.single });
        // Chart
        this.multi = data_1.multi.map(function (group) {
            group.series = group.series.map(function (dataItem) {
                dataItem.name = new Date(dataItem.name);
                return dataItem;
            });
            return group;
        });
    }
    return DashboardTemplateComponent;
}());
DashboardTemplateComponent = __decorate([
    core_1.Component({
        selector: 'qs-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.scss'],
    })
], DashboardTemplateComponent);
exports.DashboardTemplateComponent = DashboardTemplateComponent;
