"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var instituciones_service_1 = require("./instituciones.service");
describe('InstitucionesService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [instituciones_service_1.InstitucionesService]
        });
    });
    it('should ...', testing_1.inject([instituciones_service_1.InstitucionesService], function (service) {
        expect(service).toBeTruthy();
    }));
});
