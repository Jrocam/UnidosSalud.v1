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
var core_2 = require("@covalent/core");
var services_1 = require("../../services");
var ProductOverviewComponent = (function () {
    function ProductOverviewComponent(_titleService, _itemsService, _usersService, _loadingService) {
        this._titleService = _titleService;
        this._itemsService = _itemsService;
        this._usersService = _usersService;
        this._loadingService = _loadingService;
        // Generic Chart options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = true;
        this.autoScale = true;
        this.showLegend = false;
        this.showXAxisLabel = false;
        this.showYAxisLabel = false;
        this.xAxisLabel = 'X Axis';
        this.yAxisLabel = 'Y Axis';
        this.orangeColorScheme = {
            domain: [
                '#E64A19', '#F57C00', '#FFA726', '#FFB74D', '#FFCC80',
            ],
        };
        this.blueColorScheme = {
            domain: [
                '#01579B', '#00B0FF', '#80D8FF', '#E1F5FE',
            ],
        };
        // Chart Single
        Object.assign(this, { single: data_1.single });
        // Chart Multi
        this.multi = data_1.multi.map(function (group) {
            group.series = group.series.map(function (dataItem) {
                dataItem.name = new Date(dataItem.name);
                return dataItem;
            });
            return group;
        });
        // Chart Multi2
        this.multi2 = data_1.multi2.map(function (group) {
            group.series = group.series.map(function (dataItem) {
                dataItem.name = new Date(dataItem.name);
                return dataItem;
            });
            return group;
        });
    }
    ProductOverviewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._titleService.setTitle('Product Name');
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
    // ngx transform using covalent digits pipe
    ProductOverviewComponent.prototype.axisDigits = function (val) {
        return new core_2.TdDigitsPipe().transform(val);
    };
    return ProductOverviewComponent;
}());
ProductOverviewComponent = __decorate([
    core_1.Component({
        selector: 'qs-product-overview',
        templateUrl: './overview.component.html',
        styleUrls: ['./overview.component.scss'],
        viewProviders: [services_1.ItemsService, services_1.UsersService],
    })
], ProductOverviewComponent);
exports.ProductOverviewComponent = ProductOverviewComponent;
