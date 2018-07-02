import { Component, OnInit, EventEmitter, Output } from '@angular/core'
import { Router } from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Output() trackchanged = new EventEmitter()
  email: string;
  password: string;

  constructor(private router: Router) { }
  ngOnInit() {
  }
  login() {
    this.trackchanged.emit({value: this.email})
    if (this.email == 'jideboris@yahoo.com' && this.password == 'password') {
      this.router.navigate(['user'])
    } else {
      alert("Invalid credentials.")
    }
  }
}