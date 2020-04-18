import { Component, OnInit } from '@angular/core';
import {CategoryComponent} from "../category/category.component"
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  productdetails = new CategoryComponent()
  prod = this.productdetails.proddetails
  constructor() { }

  ngOnInit(): void {
  }

}