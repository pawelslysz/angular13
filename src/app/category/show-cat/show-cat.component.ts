import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-cat',
  templateUrl: './show-cat.component.html',
  styleUrls: ['./show-cat.component.css']
})
export class ShowCatComponent implements OnInit {

  constructor(private service:SharedService) { }

  CategoryList:any=[];
  
  ModalTitle:string | undefined;
  ActivateAddEditCategoryComp:boolean=false;
  category:any;

  ngOnInit(): void {
    this.refreshCategoryList();
  }

  addClick(){
    this.category={
      Id:0,
      Name:"",
      Picture:""
    }
    this.ModalTitle="Dodaj kategorię";
    this.ActivateAddEditCategoryComp=true;
  }

  editClick(item:any){
    this.category=item;
    this.ModalTitle="Edytuj kategorię";
    this.ActivateAddEditCategoryComp=true;
  }

  deleteClick(item: any){
    if(confirm('Czy na pewno chcesz usunąć dany obiekt?')){      
      this.service.deleteCategory(item.Name).subscribe(data=>{alert("Usunięto kategorię")});
      
      setTimeout(() =>{
        this.refreshCategoryList()
      }, 2000);
    }
  }

  closeClick(){
    this.ActivateAddEditCategoryComp=false;
    this.refreshCategoryList();
  }

  refreshCategoryList(){
    this.service.getCategoryList().subscribe(data=>{
      this.CategoryList=data;
    })
  }
}
