import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule,Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { DefaultPage } from "../resources/theme/gentella/defaultPage";


let routes: Routes= [
    // {path:'',redirectTo:'security',pathMatch:'full'},
    // {path:'security',loadChildren:'src/modules/security/securityModule#SecurityModule'}
        {path:'default',component:DefaultPage},
        {path:'',redirectTo:'default',pathMatch:'full'},
        {path:'',redirectTo:'default',pathMatch:'full'}
  
]

// const ModuleNames = {
//     Security:"security"
// };
//let modules:Array<string> = [ModuleNames.Security];
//let routes:Routes = routeHelper.getRootRoutes(modules);
@NgModule({
    imports:[BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(routes)],
    exports:[HttpModule],
    declarations:[DefaultPage],
    bootstrap:[DefaultPage],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class ApplicationModule{

}