import {Component} from '@angular/core';
import { UserService } from './userService';
import {ActivatedRoute} from '@angular/router';
@Component({
templateUrl:'src/modules/security/user/edituser.html'
})
export class EditUser{
    user:any={};
 constructor(us:UserService,ar:ActivatedRoute){
    let userId = ar.params['value'].id;
    debugger;
    console.log(userId);
     us.getUser(userId).subscribe(
        (user:any) =>{
            debugger;
            console.log(user);
            this.user = user.find((f:any)=>f.id == userId);
        }
     )
 }
}