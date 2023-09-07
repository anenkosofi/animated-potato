import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  public ingredients!: Ingredient[];
  private ingredientsSubscription!: Subscription;

  constructor(private ShoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.ShoppingListService.getIngredients();
    this.ingredientsSubscription =
      this.ShoppingListService.changeIngredients.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  onEdit(index: number) {
    this.ShoppingListService.startEditing.next(index);
  }

  ngOnDestroy(): void {
    this.ingredientsSubscription.unsubscribe();
  }
}
