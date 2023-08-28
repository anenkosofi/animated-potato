import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {Recipe} from "../recipes/recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply  test', 'https://d121ck0xk6rnj0.cloudfront.net/eyJidWNrZXQiOiJyaXZpYW5hLWJ1Y2tldCIsImtleSI6ImltYWdlcy9DSElDS0VOLVNIV0FSTUEtQkVBVVRZLVNIT1QtUEVBUkwtQ09VU0NPVVMuanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5IjoxMDB9LCJyZXNpemUiOnsid2lkdGgiOjEyMDAsImhlaWdodCI6MTIwMCwiZml0IjoiY292ZXIifSwic2hhcnBlbiI6dHJ1ZX19')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  setSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}
