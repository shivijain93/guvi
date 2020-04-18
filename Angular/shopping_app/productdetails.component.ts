import { Component, OnInit ,Input} from '@angular/core';
import {CategoryComponent} from "../category/category.component"
import {ActivatedRoute,Router,ParamMap} from '@angular/router'

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css'],
  
})
export class ProductdetailsComponent implements OnInit {
@Input() productdetailss;
category;
productdetails = new CategoryComponent()
prod = this.productdetails.proddetails
  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((params: ParamMap) => {
      this.category = this.activatedroute.snapshot.params.id
      console.log(this.category)
    });

  }

}
