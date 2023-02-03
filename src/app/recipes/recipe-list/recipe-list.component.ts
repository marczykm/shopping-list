import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/990402-ians-recipe-01-IMG_4724.jpg/800px-990402-ians-recipe-01-IMG_4724.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/990402-ians-recipe-01-IMG_4724.jpg/800px-990402-ians-recipe-01-IMG_4724.jpg')  
  ];

  constructor() {

  }

  ngOnInit(): void {
      
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
