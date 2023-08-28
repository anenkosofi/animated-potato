import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Recipe} from "../recipes/recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Output() setSelectedRecipe = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onShowRecipe() {
    this.setSelectedRecipe.emit();
  }

}
