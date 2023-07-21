import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(
        private http: HttpClient, 
        private recipesService: RecipeService
        ){}

    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        this.http
            .put(environment.firebase.databaseUrl,
                recipes
            ).subscribe(response => {
                console.log(response);
            })
    }

    fetchRecipes() {
            return this.http.get<Recipe[]>(environment.firebase.databaseUrl).pipe(
        map(recipes => {
            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
            });
        }),
        tap(recipes => {
            this.recipesService.setRecipes(recipes);
        }));
    }
}