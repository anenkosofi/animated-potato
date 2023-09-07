import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editable-shopping-list',
  templateUrl: './editable-shopping-list.component.html',
  styleUrls: ['./editable-shopping-list.component.scss'],
})
export class EditableShoppingListComponent implements OnInit, OnDestroy {
  @ViewChild('form') 'form': NgForm;
  public editingSubscription!: Subscription;
  public editMode = false;
  public editedIndex!: number;
  public editedIngredient!: Ingredient;

  constructor(private ShoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.editingSubscription = this.ShoppingListService.startEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedIndex = index;
        this.editedIngredient =
          this.ShoppingListService.getIngredientByIndex(index);
        this.form.setValue({
          name: this.editedIngredient.name,
          amount: this.editedIngredient.amount,
          unit: this.editedIngredient.unit,
        });
      }
    );
  }

  onAddIngredient(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount, 'pcs');
    if (this.editMode) {
      this.ShoppingListService.updateIngredient(this.editedIndex, ingredient);
    } else {
      this.ShoppingListService.addIngredients([ingredient]);
    }

    form.reset();
    this.editMode = false;
  }

  onClearForm() {
    this.form.reset();
    this.editMode = false;
  }

  onDeleteIngredient() {
    this.onClearForm();
    this.ShoppingListService.deleteIngredient(this.editedIndex);
  }

  ngOnDestroy(): void {
    this.editingSubscription.unsubscribe();
  }
}
