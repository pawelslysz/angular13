import { Component, NgModule, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-menu',
  templateUrl: './show-menu.component.html',
  styleUrls: ['./show-menu.component.css']
})

export class ShowMenuComponent implements OnInit {

  constructor(private service:SharedService) { }

  MenuList:any=[];

  ModalTitle:string | undefined;
  ActivateAddEditMenuComp:boolean=false;
  menu:any;
  
  ngOnInit(): void {
    this.refreshMenuList();
  }

  addClick(){
    this.menu={
      Id:0,
      Name:"",
      Price:null,
      Description:"",
      CategoryName:""
    }
    this.ModalTitle="Dodaj danie";
    this.ActivateAddEditMenuComp=true;
  }

  editClick(item: any){
    this.menu=item;
    this.ModalTitle="Edytuj menu";
    this.ActivateAddEditMenuComp=true;
  }

  deleteClick(item: any){
    if (confirm('Czy na pewno chcesz usunąć dany obiekt?')){
      
       this.service.deleteMenuDish(item.Id).subscribe(data=>{alert("Usunięto danie")});
      
       setTimeout(() =>{
         this.refreshMenuList()
       }, 2000);
    }
  }

  addCart(item: any){
    this.service.addOrder(item).subscribe(data=>{alert("Dodano do koszyka")});
  }

  closeClick(){
    this.ActivateAddEditMenuComp=false;
    this.refreshMenuList();
  }

  refreshMenuList(){
    this.service.getMenuList().subscribe(data=>{
      this.MenuList=data;
    })
  }

}
