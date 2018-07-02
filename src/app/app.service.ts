import { Injectable } from "@angular/core"
import { of } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  public getUsers(){
    let fakeUsers = [{ id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz' },
    { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv' },
    { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net' },
    { id: 1, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org' },
    ];
    return of(fakeUsers)

    //return new Observable<User[]>()
  }
}
