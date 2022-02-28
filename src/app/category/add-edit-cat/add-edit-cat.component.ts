import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cat',
  templateUrl: './add-edit-cat.component.html',
  styleUrls: ['./add-edit-cat.component.css']
})
export class AddEditCatComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() category:any;
  Name:string | undefined;
  Description:string | undefined;
  Picture:string | undefined;

  ngOnInit(): void {
    this.Name=this.category.Name;
    this.Description=this.category.Description;
    this.Picture=this.category.Picture;
  }

  addCategory(){
    var val = {
      Name:this.Name,
      Description:this.Description,
      Picture:this.Picture
    };

      this.service.addCategory(val).subscribe({
        next(){alert("Dodano kategorię");},
        error(){alert("Podano złe dane");}        
      });
  }

  updateCategory(){
    var val = {
      Name:this.Name,
      Description:this.Description,
      Picture:this.Picture
    };

    this.service.updateCategory(val).subscribe(res=>{
      alert("Zaktualizowano kategorię");
      });
  }

}
