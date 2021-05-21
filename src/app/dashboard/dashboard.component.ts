import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dAccno = "";
  dPswd = "";
  dAmount = "";


  wAccno = "";
  wPswd = "";
  wAmount = "";
  depositForm = this.fb.group({
    //uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],

  })
  withdrawForm = this.fb.group({
    //uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],//user enter cheyyunna fields ividay kodukkanam
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],

  })

user=this.dataService.currentUser;
  constructor(private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  deposit() {
    if (this.depositForm.valid) {//eee deposit form valid anaon nokkan
      var acno = this.depositForm.value.acno//
      //var usname = this.depositForm.value.uname
      var pswd = this.depositForm.value.pswd
      var amount = this.depositForm.value.amount
      const result = this.dataService.deposit(acno,pswd,amount)
      // alert("amount credited")
      // var accno=this.dAccno
      // var pswd=this.dPswd
      // var amount=this.dAmount
      // const result=this.dataService.deposit(accno,pswd,amount)
      if (result) {
        alert("the given amount" + amount + " credited and new balance is : " + result);
      }

    }
    else{
      alert("invalid user")
    }
  }
    withdraw(){
      //alert("amount credited")
      if (this.withdrawForm.valid) {
        var accno = this.withdrawForm.value.acno
        var pswd = this.withdrawForm.value.pswd
        var amount = this.withdrawForm.value.amount
        const result = this.dataService.withdraw(accno, pswd, amount)
        if (result) {
          alert("the given amount" + amount + " withdrawed and new balance is : " + result);
        }
      }
      else{
        alert("invalid form")
      }
    }
  }

