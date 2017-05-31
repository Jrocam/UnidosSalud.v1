"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DashboardProductComponent = (function () {
    function DashboardProductComponent(_titleService, media) {
        this._titleService = _titleService;
        this.media = media;
    }
    DashboardProductComponent.prototype.ngAfterViewInit = function () {
        // broadcast to all listener observables when loading the page
        this.media.broadcast();
        this._titleService.setTitle('Product Dashboard');
        this.title = this._titleService.getTitle();
    };
    return DashboardProductComponent;
}());
DashboardProductComponent = __decorate([
    core_1.Component({
        selector: 'qs-dashboard-product',
        templateUrl: './dashboard-product.component.html',
        styleUrls: ['./dashboard-product.component.scss'],
    })
], DashboardProductComponent);
exports.DashboardProductComponent = DashboardProductComponent;
