import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from "./homepage/homepage.component";
import { CategoryComponent } from './category/category.component';
import {ProductdetailsComponent} from './productdetails/productdetails.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import {ProductlistComponent} from './productlist/productlist.component';
const routes: Routes = [
  
    {
      path:'',
      component:HomepageComponent
    },
    {
      path:'addproduct',
      component:AddproductComponent
    },
    {
      path:'editproduct/:id',
      component:EditproductComponent
    },
    {
      path:'deleteproduct/:id',
      component:DeleteproductComponent
    },
    {
      path:'product',
      component:ProductlistComponent
    },
   
    {
      path : 'category/:id',
      component:CategoryComponent
    },
    {
      path :"category/mobiles/:id",
      component:ProductdetailsComponent
    },
    {
      path :"category/fashion/:id",
      component:ProductdetailsComponent
    },
    {
      path :"product/:id",
      component:ProductdetailsComponent
    },
    
  
  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
