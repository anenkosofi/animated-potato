import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { RecipesService } from './recipes.service';
import { Recipe } from '../components/recipes/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipesService
  ) {}

  saveRecipes() {
    const recipes = this.recipesService.getRecipes();

    this.http
      .put(
        'https://animated-potato-df110-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((res) => console.log(res));
  }

  getRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://animated-potato-df110-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
      )
      .pipe(
        map((recipes) =>
          recipes.map((recipe) => ({
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          }))
        ),
        tap(() => this.saveRecipes())
      );
  }
}
