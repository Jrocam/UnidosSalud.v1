"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var authentication_service_1 = require("./authentication.service");
describe('AuthenticationService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [authentication_service_1.AuthenticationService]
        });
    });
    it('should ...', testing_1.inject([authentication_service_1.AuthenticationService], function (service) {
        expect(service).toBeTruthy();
    }));
});
