import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from '../models/user';

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}
  public username: string;
  public password: string;
  public userId: number;

  setUserName(userName: number) {
    this.userId = userName;
    console.log(this.userId); 
  }
  register(username: string, password: string) {    
    var user = new User(username,password);
    this.http
    .post("http://localhost:3000/users", user)
    .subscribe((x) => console.log(x));
     localStorage.setItem(username, password);
  }

  login(isAuthenticated: boolean = false) 
    :Observable<any> {
      return this.http.get("http://localhost:3000/users");

    // var token = localStorage.getItem(this.username);
    // if(token == this.password) isAuthenticated = true ;
    // return isAuthenticated;    
  }
}
