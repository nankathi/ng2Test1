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
const http_1 = require('@angular/http');
const core_1 = require('@angular/core');
require('rxjs/add/operator/map');
let UserService = class UserService {
    constructor(_http) {
        this._http = _http;
        this.url = 'api/users.json';
    }
    //   users:any= [{
    //                 "id":1,
    //                 "firstName":'Raj',
    //                 "lastName":'Ankathi',
    //                 "fullName":'Raj Ankathi'
    //                 },
    //                 {
    //                     "id":2,
    //                     "firstName":'Raj',
    //                     "lastName":'Ankathi',
    //                     "fullName":'Raj Ankathi'
    //                 }
    //             ];
    //   getUsers(){
    //       return this._http.get(this.users).map((response:Response)=>{
    //                            return resizeBy.json();
    //                         })
    //   }
    getUsers() {
        // return [
        //             {
        //                 "id":1,
        //                 "firstName":'Raj',
        //                 "lastName":'Ankathi',
        //                 "fullName":'Raj Ankathi'
        //             },
        //             {
        //                 "id":2,
        //                 "firstName":'Raj',
        //                 "lastName":'Ankathi',
        //                 "fullName":'Raj Ankathi'
        //             }
        //         ]
        //this.url = 'api/users.json';
        return this._http.get(this.url).map((response) => {
            return response.json();
        });
    }
    ;
    getUser(id) {
        return this._http.get(this.url)
            .map((response) => {
            console.log(response);
            return response.json();
        });
    }
};
UserService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map