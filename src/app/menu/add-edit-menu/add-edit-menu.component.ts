import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ShowCatComponent } from 'src/app/category/show-cat/show-cat.component';

@Component({
  selector: 'app-add-edit-menu',
  templateUrl: './add-edit-menu.component.html',
  styleUrls: ['./add-edit-menu.component.css']
})
export class AddEditMenuComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() menu:any;
  Id:string | undefined;
  Name:string | undefined;
  Price:string | undefined;
  Description:string | undefined;
  CategoryName:string | undefined;
  CategoryList:any=[];

  ngOnInit(): void {
    this.Id=this.menu.Id;
    this.Name=this.menu.Name;
    this.Price=this.menu.Price;
    this.Description=this.menu.Description;
    this.CategoryName=this.menu.CategoryName;
    
    this.getCategoryList();
  }

  addMenu(){
      var val = {
        Id:this.Id,
        Name:this.Name,
        Price:this.Price,
        Description:this.Description,
        CategoryName:this.CategoryName
      };

      this.service.addMenuDish(val).subscribe({
        next(response){alert("Dodano nowe danie");},
        error(err){alert("Podano nieprawdidłowe informacje");}        
      });
  }

  updateMenu(){
    var val = {
      Id:this.Id,
      Name:this.Name,
      Price:this.Price,
      Description:this.Description,
      CategoryName:this.CategoryName
    };

      this.service.updateMenuDish(val).subscribe({
        next(response){alert("Zaktualzowano danie");},
        error(err){alert("Podano nieprawdidłowe informacje");}        
      });
  }

  getCategoryList(){
    this.service.getCategoryList().subscribe(data=>{
      this.CategoryList=data;
    })
  }

}
