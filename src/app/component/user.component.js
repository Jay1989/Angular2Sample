"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var UserComponent = (function () {
    function UserComponent() {
        this.name = 'Jay';
        this.email = 'jay.iitd@gmail.com';
        this.address = {
            house: 'Flat 202 Sindura Enclave apt',
            area: 'Green House Layout',
            city: 'Bangalore',
            state: 'Karnataka'
        };
        this.arr1 = new Array(1, 3, 5, 6, 7, 8);
    }
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'user-details',
        templateUrl: 'user.component.html'
    })
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map