"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../../../services");
var FeaturesFormComponent = (function () {
    function FeaturesFormComponent(_featuresService, _route) {
        this._featuresService = _featuresService;
        this._route = _route;
    }
    FeaturesFormComponent.prototype.goBack = function () {
        window.history.back();
    };
    FeaturesFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.url.subscribe(function (url) {
            _this.action = (url.length > 1 ? url[1].path : 'add');
        });
        this._route.params.subscribe(function (params) {
            var featureId = params.id;
            _this._featuresService.get(featureId).subscribe(function (feature) {
                _this.title = feature.title;
                _this.user = feature.user;
                _this.enabled = (feature.enabled === 1 ? true : false);
                _this.id = feature.id;
            });
        });
    };
    FeaturesFormComponent.prototype.save = function () {
        var _this = this;
        var enabled = (this.enabled ? 1 : 0);
        var now = new Date();
        this.feature = {
            title: this.title,
            user: this.user,
            enabled: enabled,
            icon: this.icon,
            id: this.id || this.title.replace(/\s+/g, '.'),
            created: now,
            modified: now,
        };
        if (this.action === 'add') {
            this._featuresService.create(this.feature).subscribe(function () {
                _this.goBack();
            });
        }
        else {
            this._featuresService.update(this.id, this.feature).subscribe(function () {
                _this.goBack();
            });
        }
    };
    return FeaturesFormComponent;
}());
FeaturesFormComponent = __decorate([
    core_1.Component({
        selector: 'qs-feature-form',
        templateUrl: './form.component.html',
        styleUrls: ['./form.component.scss'],
        viewProviders: [services_1.FeaturesService],
    })
], FeaturesFormComponent);
exports.FeaturesFormComponent = FeaturesFormComponent;
