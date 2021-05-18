import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';


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
  
  constructor(private router: Router,private dataService:DataService) { }

  ngOnInit(): void {
  }
  // accnochange(event:any){
  //   this.accno=event.target.value;
  //   console.log(this.accno);

  // }
  // unamechange(event: any) {
  //   this.uname = event.target.value;
  //   console.log(this.uname);

  // }
  // pswdchange(event:any){
  //   this.pswd=event.target.value;
  //   console.log(this.pswd);

  // }
  login() {
    
    var acno = this.acno
    //var usname = this.uname
    var pswd = this.pswd
    const result=this.dataService.login(acno,pswd)
    if(result){
      alert("login succesfully...")
      this.router.navigateByUrl("dashboard")
    }
    }
    //let users = this.dataService.accountDetails;
  //   if (acno in users) {

  //     if (pswd == users[acno]["password"]) {//here in this line pswd means var pswd...and "password " accountdetails enna objectil ( seen in starting ) koduthekkunnathanu
  //       alert("login success");
  //       this.router.navigateByUrl("dashboard");//to redirect to another page 
  //     }

  //     else {
  //       alert("incorrect password")//invalid username or password
  //     }
  //   }
  //   else {
  //     alert("invalid acount")//invalid account number
  //   }
  // }
  register(){
    this.router.navigateByUrl("register");
  }
}