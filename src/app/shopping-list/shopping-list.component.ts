import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredientes: Ingredient[] = [ 
    new Ingredient('torta', 2),
    new Ingredient('mopa', 2),
    new Ingredient('virga', 2)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
