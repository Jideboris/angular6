import { Component, OnInit } from '@angular/core'
import { AppService } from "../app.service"
import { User } from '../model/user'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[]
  constructor(private apiService: AppService) { }
  ngOnInit() {
    this.apiService.getUsers().subscribe(
      data => this.users = data)
  }
  trackChanged(track){
    console.log("YES!! " + track)
}
}