import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
 listData;
  constructor(private productservice:ProductService,private router:Router) { 
    this.productservice.listProduct().subscribe((data) => {
      this.listData = data;
    })
  }

  ngOnInit(): void {
    //this.listData= this.productservice.getAllListData();
  }

  addproduct(){
    this.router.navigate(['/addproduct'])
  }
  
  
  
    

   
  }


