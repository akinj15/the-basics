import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('figura repetida', 'quem faz oque faaz e triste, haha', 'https://static.wikia.nocookie.net/dragonball/images/4/4a/VegetaAscendedSuperSaiyanEp155.png/')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
