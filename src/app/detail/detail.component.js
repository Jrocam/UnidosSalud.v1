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
var DetailComponent = (function () {
    function DetailComponent(_router, _itemsService, _route) {
        this._router = _router;
        this._itemsService = _itemsService;
        this._route = _route;
        this.item = {};
    }
    DetailComponent.prototype.goBack = function () {
        this._router.navigate(['/product']);
    };
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var itemId = params.id;
            _this._itemsService.get(itemId).subscribe(function (item) {
                _this.item = item;
            }, function (error) {
                _this._itemsService.staticGet(itemId).subscribe(function (item) {
                    _this.item = item;
                });
            });
        });
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    core_1.Component({
        selector: 'qs-detail',
        templateUrl: './detail.component.html',
        styleUrls: ['./detail.component.scss'],
        viewProviders: [services_1.ItemsService],
    })
], DetailComponent);
exports.DetailComponent = DetailComponent;
