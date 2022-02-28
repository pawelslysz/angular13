import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ShowMenuComponent } from './menu/show-menu/show-menu.component';
import { AddEditMenuComponent } from './menu/add-edit-menu/add-edit-menu.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { ShowCatComponent } from './category/show-cat/show-cat.component';
import { AddEditCatComponent } from './category/add-edit-cat/add-edit-cat.component';
import { ShowOrderComponent } from './order/show-order/show-order.component';
import { EditOrderComponent } from './order/edit-order/edit-order.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ShowMenuComponent,
    AddEditMenuComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    CategoryComponent,
    ShowCatComponent,
    AddEditCatComponent,
    ShowOrderComponent,
    EditOrderComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
