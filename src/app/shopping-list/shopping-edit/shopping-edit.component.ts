import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @Output() newIngredientEvent = new EventEmitter<Ingredient>();

  onAdd(name: HTMLInputElement, amount: HTMLInputElement){
    const newIngredient = new Ingredient(name.value, amount.valueAsNumber);
    this.newIngredientEvent.emit(newIngredient);
  }

}
