import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService){}

  ngOnInit(): void {
  }

  onAdd(name: HTMLInputElement, amount: HTMLInputElement){
    const newIngredient = new Ingredient(name.value, amount.valueAsNumber);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
