import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

import {Ingredient} from "../../models/ingredient.model";

@Component({
  selector: 'app-editable-shopping-list',
  templateUrl: './editable-shopping-list.component.html',
  styleUrls: ['./editable-shopping-list.component.scss']
})
export class EditableShoppingListComponent implements OnInit {
  @ViewChild('name') nameRef!: ElementRef;
  @ViewChild('amount') amountRef!: ElementRef;
  @Output() addedIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    const ingredient = new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value);
    this.addedIngredient.emit(ingredient);
  }

}
