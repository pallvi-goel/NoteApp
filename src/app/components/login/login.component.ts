import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { LoginService } from "../../services/login.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {}

  public username: string;
  public password: string;
  public usernameError: boolean = false;
  public passwordError: boolean = false;

  ngOnInit() {}
  ngDoCheck() {
    //whenever user inputs any value this happens
    this.loginService.username = this.username;
    console.log(this.username);

    console.log(this.password);
    this.loginService.password = this.password;
  }
  //#region
  login(): void {
    if (this.username == " " || this.username == "") {
      this.usernameError = true;
    }
    if (this.password == " " || this.password == "") {
      this.passwordError = true;
    }

    this.loginService.setUserName(this.username);

    if (this.loginService.login()) this.router.navigate(["/main"]);
  }

  register() {
    this.loginService.register(this.username, this.password);
  }
}
