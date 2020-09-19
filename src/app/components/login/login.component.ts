import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NotesService } from 'src/app/services/notes.service';
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
  public userId:number;
  public usernameError: boolean = false;
  public passwordError: boolean = false;

  ngOnInit() {}
  
  login(): void {
    this.validateFormFields();
var isAuthenticated: boolean;
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
  this.userId = isAuthenticated[0].id;
  this.loginService.setUserName(this.userId);

  console.log(this.userId);
 this.router.navigate(["/main"]);
}
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
