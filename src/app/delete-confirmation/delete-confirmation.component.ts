import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteconfirmationComponent implements OnInit {

  @Input() item:string | null |undefined;
  
@Output() onDelete =new EventEmitter;


@Output() onCancel =new EventEmitter;


  constructor() { }

  ngOnInit(): void {
  }
delete()
{
  this.onDelete.emit(this.item)
  //alert("deleting..........")

}
cancel()
{
  alert("cancelling...................")
  this.onCancel.emit()
  //alert("deleting..........")

}
}
