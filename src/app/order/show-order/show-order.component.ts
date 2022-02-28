import { Component, NgModule, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})

export class ShowOrderComponent implements OnInit {

  constructor(private service:SharedService) { }

  Orders:any=[];

  ModalTitle:string | undefined;
  ActivateAddEditOrderComp:boolean=false;
  order:any;

  ngOnInit(): void {
    this.refreshOrders();
  }

  addClick(){}

  editClick(){}

  deleteClick(item:any){
    if (confirm('Czy na pewno chcesz usunąć dany obiekt?')){
      
      this.service.deleteOrder(item.Id).subscribe(data=>{alert("Usunięto zamówienie")});
     
      setTimeout(() =>{
        this.refreshOrders()
      }, 2000);
   }
  }

  closeClick(){}

  refreshOrders(){
    this.service.getOrderList().subscribe(data=>{
      this.Orders=data;
    })
  }
}
