"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@covalent/core");
var FormComponent = (function () {
    function FormComponent(media) {
        this.media = media;
        this.activeDeactiveStep1Msg = 'No select/deselect detected yet';
        this.stateStep2 = core_2.StepState.Required;
        this.stateStep3 = core_2.StepState.Complete;
        this.disabled = false;
    }
    FormComponent.prototype.ngAfterViewInit = function () {
        // broadcast to all listener observables when loading the page
        this.media.broadcast();
    };
    FormComponent.prototype.toggleRequiredStep2 = function () {
        this.stateStep2 = (this.stateStep2 === core_2.StepState.Required ? core_2.StepState.None : core_2.StepState.Required);
    };
    FormComponent.prototype.toggleCompleteStep3 = function () {
        this.stateStep3 = (this.stateStep3 === core_2.StepState.Complete ? core_2.StepState.None : core_2.StepState.Complete);
    };
    FormComponent.prototype.toggleDisabled = function () {
        this.disabled = !this.disabled;
    };
    FormComponent.prototype.activeStep1Event = function () {
        this.activeDeactiveStep1Msg = 'Active event emitted.';
    };
    FormComponent.prototype.deactiveStep1Event = function () {
        this.activeDeactiveStep1Msg = 'Deactive event emitted.';
    };
    return FormComponent;
}());
FormComponent = __decorate([
    core_1.Component({
        selector: 'qs-product-form',
        templateUrl: './form.component.html',
        styleUrls: ['./form.component.scss'],
    })
], FormComponent);
exports.FormComponent = FormComponent;
