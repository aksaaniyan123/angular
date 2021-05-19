import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname = "";
  acno = "";
  pswd = "";
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })
  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {
    console.log(this.registerForm.get('uname')?.errors);

    if (this.registerForm.get('uname')?.errors)//to check form is valid or not

    {
      alert(" invalid username ")
    }



    // alert("form valid")
    // }
    //else{
    // alert("invalid form")
if(this.registerForm.valid){

    var uname = this.registerForm.value.uname;
    var acno = this.registerForm.value.acno;
    var pswd = this.registerForm.value.pswd;
    const result = this.dataService.register(uname, acno, pswd)
    if (result) {
      alert("succesfully registered.....");
      this.router.navigateByUrl("");

    }
    else {
      alert("user exists....please login")
    }
  }
    else{
alert("invalid form")
    }
  }
  }
  //   let user=this.dataService.accountDetails;
  //   if(acno in user){
  //     alert("user exists...please login")

  //   }
  //   else{
  //     user[acno]={
  //       acno,
  //       username:uname,
  //       password:pswd,
  //       balance:0
  //     }
  //     alert("succesfully registered.....");
  //     this.router.navigateByUrl("");
  //   }
  // }
  // }


