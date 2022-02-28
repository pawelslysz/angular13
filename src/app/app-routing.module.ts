import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { EmployeeComponent } from './employee/employee.component';
import { CategoryComponent } from './category/category.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:'menu', component:MenuComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'categories', component:CategoryComponent},
  {path: 'orders', component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
