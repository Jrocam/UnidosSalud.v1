"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../../services");
var ProductFeaturesComponent = (function () {
    function ProductFeaturesComponent(_titleService, _dialogService, _featuresService, _loadingService) {
        this._titleService = _titleService;
        this._dialogService = _dialogService;
        this._featuresService = _featuresService;
        this._loadingService = _loadingService;
    }
    ProductFeaturesComponent.prototype.openConfirm = function (id) {
        var _this = this;
        this._dialogService.openConfirm({
            message: 'Are you sure you want to delete this feature? It\'s being used!',
            title: 'Confirm',
            cancelButton: 'No, Cancel',
            acceptButton: 'Yes, Delete',
        }).afterClosed().subscribe(function (accept) {
            if (accept) {
                _this.deleteFeature(id);
            }
            else {
                // DO SOMETHING ELSE
            }
        });
    };
    ProductFeaturesComponent.prototype.ngAfterViewInit = function () {
        this._titleService.setTitle('Product Features');
        this.loadFeatures();
    };
    ProductFeaturesComponent.prototype.filterFeatures = function (filterTitle) {
        if (filterTitle === void 0) { filterTitle = ''; }
        this.filteredFeatures = this.features.filter(function (feature) {
            return feature.title.toLowerCase().indexOf(filterTitle.toLowerCase()) > -1;
        });
    };
    ProductFeaturesComponent.prototype.loadFeatures = function () {
        var _this = this;
        this._loadingService.register('features.list');
        this._featuresService.query().subscribe(function (features) {
            _this.features = features;
            _this.filteredFeatures = features;
            _this._loadingService.resolve('features.list');
        }, function (error) {
            _this._featuresService.staticQuery().subscribe(function (features) {
                _this.features = features;
                _this.filteredFeatures = features;
                _this._loadingService.resolve('features.list');
            });
        });
    };
    ProductFeaturesComponent.prototype.deleteFeature = function (id) {
        var _this = this;
        this._loadingService.register('features.list');
        this._featuresService.delete(id).subscribe(function () {
            _this.features = _this.features.filter(function (feature) {
                return feature.id !== id;
            });
            _this.filteredFeatures = _this.filteredFeatures.filter(function (feature) {
                return feature.id !== id;
            });
            _this._loadingService.resolve('features.list');
        }, function (error) {
            _this._loadingService.resolve('features.list');
        });
    };
    return ProductFeaturesComponent;
}());
ProductFeaturesComponent = __decorate([
    core_1.Component({
        selector: 'qs-product-features',
        templateUrl: './features.component.html',
        styleUrls: ['./features.component.scss'],
        viewProviders: [services_1.FeaturesService],
    })
], ProductFeaturesComponent);
exports.ProductFeaturesComponent = ProductFeaturesComponent;
