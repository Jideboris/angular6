import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from '../app/app.routing.module'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component'
import { LoginComponent } from './login/login.component'
import { UserComponent } from './user/user.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
