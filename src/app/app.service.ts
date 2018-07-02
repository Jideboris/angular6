
import { User } from "./model/user"
import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { of, Observable } from "rxjs"
 

@Injectable({
  providedIn: 'root'
})
export class AppService {
   url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http: HttpClient) { }
  // getUsers(){
  //   let fakeUsers = [{ id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz' },
  //   { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv' },
  //   { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net' },
  //   { id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org' },
  //   ];
  //   return of(fakeUsers)
  // }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }

}
