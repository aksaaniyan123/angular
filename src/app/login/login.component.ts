import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = "your perfect partner"
  //acno = "account number please"
  //uname = "";
  //pswd = "";
  loginForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })
  
  constructor(private router: Router,private dataService:DataService,private fb: FormBuilder) { }

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
    if(this.loginForm.valid){
    var acno = this.loginForm.value.acno
    var usname = this.loginForm.value.uname
    var pswd = this.loginForm.value.pswd

    this.dataService.login(acno,pswd)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message);
        localStorage.setItem("name",result.name);
        localStorage.setItem("acno",result.acno);
           //alert("login succesfully...")
          this.router.navigateByUrl("dashboard")
  
      }
      
      },
      (result)=>{
        alert(result.error.message)
     })
    }
    // if(result){
    //   alert("login succesfully...")
    //   this.router.navigateByUrl("dashboard")
    // }
    // }
    else{
      alert("invalid form")
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