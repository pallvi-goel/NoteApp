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
  
  login(): void {
    this.validateFormFields();
var isAuthenticated: boolean;
    this.loginService.setUserName(this.username);
   var a = this.loginService.login().subscribe((x)=>
   {
   console.log(x);
   
  var isAuthenticated= x.filter((user) => this.authenticateUser(user))
  console.log(isAuthenticated);
  if(isAuthenticated.length<=0)
  {
   this.router.navigate(["/login"]);
  }
else
{
 this.router.navigate(["/main"]);
}
  return isAuthenticated;
   });
   debugger;
  

   

  }

  private authenticateUser(x: any): any {
  console.log(x.userName, x.password);
    var v= (this.username == x.userName) && (this.password == x.password);
    return v;
  }

  private validateFormFields() {
    (this.username == "" || this.username == " ") ? this.usernameError = true : this.usernameError = false;
    (this.password == "" || this.password == " ") ? this.passwordError = true : this.passwordError = false;
  }

  register() {
    this.loginService.register(this.username, this.password);
  }
}
