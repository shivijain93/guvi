import { Component, OnInit ,Input} from '@angular/core';
import {ActivatedRoute,Router,ParamMap} from '@angular/router'

@Component({
  selector: 'app-categorydetails',
  templateUrl: './categorydetails.component.html',
  styleUrls: ['./categorydetails.component.css']
})
export class CategorydetailsComponent implements OnInit {
  @Input() productdetails;
  category;
    constructor(private activatedroute:ActivatedRoute) {
     }
  
    ngOnInit(): void {
      this.activatedroute.paramMap.subscribe((params: ParamMap) => {
        this.category = this.activatedroute.snapshot.params.id
      });
  
    }
  
  }
