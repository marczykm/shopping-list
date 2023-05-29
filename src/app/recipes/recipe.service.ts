import { Injectable, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService implements OnInit {
  recipesChange = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'A Test Recipe 1',
  //     'This is simply a test 1 This is simply a test 1 This is simply a test 1 This is simply a test 1 This is simply a test 1 This is simply a test 1 This is simply a test 1 This is simply a test 1 ',
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/990402-ians-recipe-01-IMG_4724.jpg/800px-990402-ians-recipe-01-IMG_4724.jpg',
  //     [
  //       new Ingredient('Meat', 1), new Ingredient('French Fries', 20)
  //     ]
  //   ),
  //   new Recipe(
  //     'A Test Recipe 2',
  //     'This is simply a test 2',
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/990402-ians-recipe-01-IMG_4724.jpg/800px-990402-ians-recipe-01-IMG_4724.jpg',
  //     [
  //       new Ingredient('Buns', 2), new Ingredient('Meat', 1)
  //     ]
  //   )
  // ];
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