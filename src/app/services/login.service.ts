import { Injectable } from "@angular/core";
import { Note } from "../models/note";
import { Notes } from "../models/notes";
import { Base64 } from "js-base64";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor() {}
  public username: string;
  public password: string;

  private userNameSubject = new BehaviorSubject("default message");
  userName$ = this.userNameSubject.asObservable();
  setUserName(userName: string) {
    console.log(userName);
    this.username = userName;
    this.userNameSubject.next(userName);
  }

  register(username: string, password: string) {
    // var accessToken = Base64.encode(password);
    //var encodedPassword = btoa(password);
    // var accessToken = encodedPassword;
    localStorage.setItem(username, password);
  }
  login() {
    var token = localStorage.getItem(this.username);
    //   var accessToken = Base64.decode(this.password);
    if (token == this.password) {
      return true;
    } else return false;
  }
}
