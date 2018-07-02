import { Injectable } from "@angular/core"
import { of } from "rxjs"
import { HttpClient } from '@angular/common/http'
 

@Injectable({
  providedIn: 'root'
})
export class AppService {
   url = 'https://jsonplaceholder.typicode.com/users'
  constructor() { }
  getUsers(){
    let fakeUsers = [{ id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz' },
    { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv' },
    { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net' },
    { id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org' },
    ];
    return of(fakeUsers)
  }
  // getLiveUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.url)
  // }

}
