import { Injectable, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  recipesChange = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) { }


  private recipes: Recipe[] = [];

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChange.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChange.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChange.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChange.next(this.recipes.slice());
  }

}