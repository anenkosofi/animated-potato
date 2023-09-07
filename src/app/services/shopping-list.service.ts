import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  changeIngredients = new Subject<Ingredient[]>();
  startEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Chipotle Peppers', 2, 'tbs'),
    new Ingredient('Chopped Onion', 2, 'tbs'),
  ];

  constructor() {}

  getIngredients() {
    return [...this.ingredients];
  }

  getIngredientByIndex(index: number) {
    return [...this.ingredients][index];
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients = [...this.ingredients, ...ingredients];
    this.changeIngredients.next([...this.ingredients]);
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.changeIngredients.next([...this.ingredients]);
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.changeIngredients.next([...this.ingredients]);
  }
}
