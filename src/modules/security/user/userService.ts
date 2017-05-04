import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService {
    url = 'api/users.json';
    constructor(private _http: Http) { }

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

    getUsers(): any {
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
        return this._http.get(this.url).map(
            (response: Response) => {
                return response.json();
            });
    };

    getUser(id: number):any {
        return this._http.get(this.url)
            .map((response: Response) => {
                console.log(response);
                return response.json()
            })
    }
}