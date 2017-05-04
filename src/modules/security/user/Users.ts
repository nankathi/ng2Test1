import { Component } from '@angular/core';
import { UserService } from './userService';
import {Router} from '@angular/router';
@Component({
    templateUrl: 'src/modules/security/user/users.html'
})
export class Users {
    users: Array<any> = [];
    // constructor(private _us:UserService){}
    constructor(userService: UserService,private router:Router) {
        let self = this;
        userService.getUsers().subscribe(
            (users:any) =>{
                self.users = users;
            }
        )
    }
    onEditClicked(user:any){
        //console.log(user);
        debugger;
        this.router.navigate(["users",user.id]);
    }
    // ngOnInit(){
    //     this._us.getUsers().subscribe(
    //         usrs => this.users = usrs
    //     )};

    //    users: any[] = [
    //                 {
    //                     "id":1,
    //                     "firstName":'Raj',
    //                     "lastName":'Ankathi',
    //                     "fullName":'Raj Ankathi'
    //                 },
    //                 {
    //                     "id":2,
    //                     "firstName":'Micheal',
    //                     "lastName":'Jordan',
    //                     "fullName":'Micheal Jordan'
    //                 }
    //             ];

}