"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../services");
var LogsComponent = (function () {
    function LogsComponent(_titleService, _itemsService, _usersService, _productsService, _loadingService, media) {
        this._titleService = _titleService;
        this._itemsService = _itemsService;
        this._usersService = _usersService;
        this._productsService = _productsService;
        this._loadingService = _loadingService;
        this.media = media;
    }
    LogsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // broadcast to all listener observables when loading the page
        this.media.broadcast();
        this._titleService.setTitle('Covalent Logs');
        this._loadingService.register('items.load');
        this._itemsService.query().subscribe(function (items) {
            _this.items = items;
            setTimeout(function () {
                _this._loadingService.resolve('items.load');
            }, 2000);
        }, function (error) {
            _this._itemsService.staticQuery().subscribe(function (items) {
                _this.items = items;
                setTimeout(function () {
                    _this._loadingService.resolve('items.load');
                }, 2000);
            });
        });
        this._loadingService.register('products.load');
        this._productsService.query().subscribe(function (products) {
            _this.products = products;
            setTimeout(function () {
                _this._loadingService.resolve('products.load');
            }, 2000);
        });
        this._loadingService.register('users.load');
        this._usersService.query().subscribe(function (users) {
            _this.users = users;
            setTimeout(function () {
                _this._loadingService.resolve('users.load');
            }, 2000);
        }, function (error) {
            _this._usersService.staticQuery().subscribe(function (users) {
                _this.users = users;
                setTimeout(function () {
                    _this._loadingService.resolve('users.load');
                }, 2000);
            });
        });
    };
    return LogsComponent;
}());
LogsComponent = __decorate([
    core_1.Component({
        selector: 'qs-logs',
        templateUrl: './logs.component.html',
        styleUrls: ['./logs.component.scss'],
        viewProviders: [services_1.ItemsService, services_1.UsersService, services_1.ProductsService],
    })
], LogsComponent);
exports.LogsComponent = LogsComponent;
