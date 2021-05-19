import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
dAccno="";
dPswd="";
dAmount="";
wAccno="";
wPswd="";
wAmount="";
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
deposit(){
  alert("amount credited")
  var accno=this.dAccno
  var pswd=this.dPswd
  var amount=this.dAmount
  const result=this.dataService.deposit(accno,pswd,amount)
  if(result){
    alert("the given amount"+amount+" credited and new balance is : "+result);
  }
}
withdraw(){
  //alert("amount credited")
  var accno=this.wAccno
  var pswd=this.wPswd
  var amount=this.wAmount
  const result=this.dataService.withdraw(accno,pswd,amount)
  if(result){
    alert("the given amount"+amount+" withdrawed and new balance is : "+result);
  }
}
}
