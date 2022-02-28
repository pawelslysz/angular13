import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  readonly ApiUrl = "https://localhost:44325/restaurant";


  constructor(private http:HttpClient) { }

  getMenuList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/menu');
  }

  addMenuDish(val:any){
    return this.http.post(this.ApiUrl+'/menu', val);
  }

  updateMenuDish(val:any){
    return this.http.put(this.ApiUrl+'/menu', val);
  }

  deleteMenuDish(val:any){
    return this.http.delete(this.ApiUrl+'/menu/'+val);
  }

  //Employee


  getEmployeeList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/employee');
  }

  addEmployee(val:any){
    return this.http.post(this.ApiUrl+'/employee', val);
  }

  updateEmployee(val:any){
    return this.http.put(this.ApiUrl+'/employee', val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.ApiUrl+'/employee', val);
  }


  getAllDishes():Observable<any[]>{
    return this.http.get<any[]>(this.ApiUrl+'/restaurant/menu');
  }

  //Category

  getCategoryList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/categories');
  }

  addCategory(val:any){
    return this.http.post(this.ApiUrl+'/categories', val);
  }

  updateCategory(val:any){
    return this.http.put(this.ApiUrl+'/categories', val);
  }

  deleteCategory(val:any){
    return this.http.delete(this.ApiUrl+'/categories/'+val);
  }

  //Order

  addOrder(val: any){
    return this.http.post(this.ApiUrl+'/orders', val);
  }

  getOrderList(){
    return this.http.get<any>(this.ApiUrl+'/orders');
  }

  deleteOrder(val:any){
    return this.http.delete(this.ApiUrl+'/orders/'+val);
  }

}
