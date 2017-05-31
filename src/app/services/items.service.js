"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@covalent/http");
var api_config_1 = require("../../config/api.config");
var ItemsService = (function (_super) {
    __extends(ItemsService, _super);
    function ItemsService(_http) {
        var _this = _super.call(this, _http, {
            baseUrl: api_config_1.MOCK_API,
            path: '/items',
        }) || this;
        _this._http = _http;
        return _this;
    }
    ItemsService.prototype.staticQuery = function () {
        return this._http.get('data/items.json')
            .map(function (res) {
            return res.json();
        });
    };
    ItemsService.prototype.staticGet = function (id) {
        return this._http.get('data/items.json')
            .map(function (res) {
            var item;
            res.json().forEach(function (s) {
                if (s.item_id === id) {
                    item = s;
                }
            });
            return item;
        });
    };
    return ItemsService;
}(http_1.RESTService));
ItemsService = __decorate([
    core_1.Injectable()
], ItemsService);
exports.ItemsService = ItemsService;
