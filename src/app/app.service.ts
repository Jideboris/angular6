import { Injectable } from "@angular/core"
import { of } from "rxjs"
import { User } from "./model/user"


@Injectable({
  providedIn: 'root'
})
export class AppService {
  users: User[]
  user: User
  constructor() {
    
  }
  public getUsers() {

    let fakeUsers = [{ id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com' },
    { id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com' },
    { id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com' },
    { id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com' },
    ];
    
    return of(fakeUsers)

  
  }
}
