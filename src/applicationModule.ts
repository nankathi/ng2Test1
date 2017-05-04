import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule,Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { DefaultPage } from "../resources/theme/gentella/defaultPage";
import {AppCommonModule} from './modules/common/commonModule';
import { Users } from "../src/modules/security/user/users";
import {EditUser} from '../src/modules/security/user/editUser';
import {UserService} from './modules/security/user/userService';
let routes: Routes= [
        {path:'users',component:Users},
        {path:'',redirectTo:'users',pathMatch:'full'},
        {path:'users/:id',component:EditUser}
]

// const ModuleNames = {
//     Security:"security"
// };
//let modules:Array<string> = [ModuleNames.Security];
//let routes:Routes = routeHelper.getRootRoutes(modules);
@NgModule({
    imports:[BrowserModule,FormsModule,HttpModule,AppCommonModule,RouterModule.forRoot(routes)],
    declarations:[DefaultPage,Users,EditUser],
    providers:[UserService],
    bootstrap:[DefaultPage],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class ApplicationModule{

}