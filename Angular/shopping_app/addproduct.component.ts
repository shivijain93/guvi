import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
userForm;
  constructor(private productService:ProductService,private router:Router) {
    this.userForm = new FormGroup({
      'name': new FormControl('', [Validators.required,Validators.minLength(5)]),
      'price': new FormControl('', [Validators.required,Validators.min(50)]),
      'category': new FormControl('', [Validators.required]),
      'productdetails': new FormControl('', [Validators.required]),
      
    })
   }

  ngOnInit() {}

  sendData(){
   if(this.userForm.valid){
    console.log(this.userForm.value)
   this.productService.postProduct(this.userForm.value).subscribe((productData) => {
      this.router.navigate(['/product'])
   })

  }

  }
 }