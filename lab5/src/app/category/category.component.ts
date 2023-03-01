import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category, categories } from '../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  category = [...categories];
  //currentCategory : Category = categories[0]
  

  constructor(private router: Router){
  }

  Selected(category: string):void{
    this.router.navigate([`productlist`, `${category}`])
  }
}
