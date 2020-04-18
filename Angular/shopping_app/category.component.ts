import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
name;
  constructor() { }

  ngOnInit(): void {
  }
  proddetails=[
    
    {
      id:"mobile1",
      category:"mobiles",
      name:"samsung M10s",
      price : "INR 40,000",
      imgsrc : "https://www.pngarts.com/files/1/IPhone-PNG-Image-Background.png",
      description: "Black, 6GB RAM, 64GB Storage"
    },
    {
      id:"mobile2",
      name:"Samsung Galaxy M31",
      category:"mobiles",
      price : "INR 110,000",
      imgsrc : "http://www.pngmart.com/files/7/Mobile-Phone-PNG-HD.png",
      description: "Ocean Blue, 6GB RAM, 64GB Storage"
    },
    
    {
      id:"laptop1",
      name:"Dell Vostro",
      category:"laptops",
      price : "INR 53000",
      imgsrc:"https://www.pngarts.com/files/4/HP-Laptop-PNG-Image.png",
      description: "Dell Vostro 3000 Core i3 8th Gen - (4 GB/1 TB HDD/Linux) 3480 Laptop  (14 inch, Black, 1.79 kg)"
    },
    
    {
      id:"laptop2",
      name:"Dell Inspiron ",
      category:"laptops",
      price : "INR 55000",
      imgsrc:"https://www.pngarts.com/files/4/HP-Laptop-PNG-Image.png",
      description: "Dell Inspiron 3000 Core i5 10th Gen - (4 GB/512 GB SSD/Windows 10 Home) 3593 Laptop  (15.6 inch, Platinum Silver, 2.2 kg, With MS Office)"
    },
    
  ]

}


