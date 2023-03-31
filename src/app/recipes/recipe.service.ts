import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe 1', 
          'This is simply a test 1', 
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/990402-ians-recipe-01-IMG_4724.jpg/800px-990402-ians-recipe-01-IMG_4724.jpg',
          [
            new Ingredient('Meat', 1), new Ingredient('French Fries', 20)
          ]
          ),
        new Recipe(
          'A Test Recipe 2', 
          'This is simply a test 2', 
          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/990402-ians-recipe-01-IMG_4724.jpg/800px-990402-ians-recipe-01-IMG_4724.jpg',
          [
            new Ingredient('Buns', 2), new Ingredient('Meat', 1)
          ]
          )  
      ];

      getRecipes() {
        return this.recipes.slice();
      }
}