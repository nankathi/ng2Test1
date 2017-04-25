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
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require('@angular/router');
const forms_1 = require("@angular/forms");
const http_1 = require('@angular/http');
const defaultPage_1 = require("../resources/theme/gentella/defaultPage");
let routes = [
    // {path:'',redirectTo:'security',pathMatch:'full'},
    // {path:'security',loadChildren:'src/modules/security/securityModule#SecurityModule'}
    { path: 'default', component: defaultPage_1.DefaultPage },
    { path: '', redirectTo: 'default', pathMatch: 'full' },
    { path: '', redirectTo: 'default', pathMatch: 'full' }
];
// const ModuleNames = {
//     Security:"security"
// };
//let modules:Array<string> = [ModuleNames.Security];
//let routes:Routes = routeHelper.getRootRoutes(modules);
let ApplicationModule = class ApplicationModule {
};
ApplicationModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(routes)],
        exports: [http_1.HttpModule],
        declarations: [defaultPage_1.DefaultPage],
        bootstrap: [defaultPage_1.DefaultPage],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    }), 
    __metadata('design:paramtypes', [])
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=applicationModule.js.map