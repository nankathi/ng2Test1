"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const userService_1 = require('./userService');
const router_1 = require('@angular/router');
let Users = class Users {
    // constructor(private _us:UserService){}
    constructor(userService, router) {
        this.router = router;
        this.users = [];
        let self = this;
        userService.getUsers().subscribe((users) => {
            self.users = users;
        });
    }
    onEditClicked(user) {
        //console.log(user);
        debugger;
        this.router.navigate(["users", user.id]);
    }
};
Users = __decorate([
    core_1.Component({
        templateUrl: 'src/modules/security/user/users.html'
    }), 
    __metadata('design:paramtypes', [userService_1.UserService, router_1.Router])
], Users);
exports.Users = Users;
//# sourceMappingURL=users.js.map