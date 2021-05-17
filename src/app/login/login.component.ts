import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "your perfect partner"
  acno = "account number please"
  uname = "";
  pswd = "";
  accountDetails: any = {
    1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
  };
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // accnochange(event:any){
  //   this.accno=event.target.value;
  //   console.log(this.accno);

  // }
  unamechange(event: any) {
    this.uname = event.target.value;
    console.log(this.uname);

  }
  // pswdchange(event:any){
  //   this.pswd=event.target.value;
  //   console.log(this.pswd);

  // }
  login() {
    alert("login clicked");
    var acno = this.acno
    var usname = this.uname
    var pswd = this.pswd
    let users = this.accountDetails;
    if (acno in users) {

      if (pswd == users[acno]["password"]) {//here in this line pswd means var pswd...and "password " accountdetails enna objectil ( seen in starting ) koduthekkunnathanu
        alert("login success");
        //this.router.navigateByUrl("dashboard");//to redirect to another page 
      }

      else {
        alert("incorrect password")//invalid username or password
      }
    }
    else {
      alert("invalid acount")//invalid account number
    }
  }
  register(){
    this.router.navigateByUrl("register");
  }
}