import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from '../components/recipes/recipe.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  changeRecipes = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Banana Bread',
      "This banana bread recipe creates the most delicious, moist loaf with loads of banana flavor. Why compromise the banana flavor? Friends and family love my recipe and say it's by far the best! It tastes wonderful toasted. Enjoy!",
      'https://www.allrecipes.com/thmb/zksmXHLzXQ46d7CFgiDOMoHZ1ow=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20144-banana-banana-bread-mfs-60-bddcb8e0caac452386de52f6fecf33db.jpg',
      [
        new Ingredient('Brown Sugar', 1, 'cup'),
        new Ingredient('Eggs', 3, 'pcs'),
        new Ingredient('Bananas', 10, 'pcs'),
        new Ingredient('Butter', 200, 'g'),
        new Ingredient('Baking Soda', 1, 'tbs'),
      ]
    ),
    new Recipe(
      2,
      'Biscotti',
      'These biscotti are easy, quick, and my favorite Italian cookies. My friend at work gave me this simple, no-frills recipe.',
      'https://www.allrecipes.com/thmb/-6xZv-RExpwiXhcf_GlCqiwA62w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8927344-8da7802af20f4d868ea9230a58666ac5.jpg',
      [
        new Ingredient('White Sugar', 1, 'cup'),
        new Ingredient('Eggs', 3, 'pcs'),
        new Ingredient('Vegetable Oil', 0.5, 'tbs'),
        new Ingredient('Anise Extract', 1, 'tbs'),
        new Ingredient('Baking Powder', 1, 'tbs'),
      ]
    ),
    new Recipe(
      3,
      'Mexi-Chicken Avocado Cups',
      "A Mexican-style side dish made of chicken and avocado, no cooking required. It's a quick, healthy, and delicious recipe guaranteed to make you feel and look good.",
      'https://www.allrecipes.com/thmb/EKLWgacfdTn2wqecqQx_SywLvlE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1895674-0c24cb316a514e01b0e64871122cbbac.jpg',
      [
        new Ingredient('Canned Chicken', 3, 'cans'),
        new Ingredient('Cilantro', 1, 'tbs'),
        new Ingredient('Chili Powder', 1, 'tbs'),
        new Ingredient('Avocado', 3, 'pcs'),
      ]
    ),
    new Recipe(
      4,
      'Easy Chorizo Street Tacos',
      'Get street-style tacos without ever leaving your house. Mexican chorizo brings the heat here. "I made this for Sunday family lunch and everyone loved them," says reviewer NoTimeMom. "Plus this was so easy and quick."',
      'https://www.allrecipes.com/thmb/9whEhVLzNuPhTcKIUBRR68bWfjk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Easy-Chorizo-Street-Tacos-by-Allrecipes-Magazine-2000-defee40a5f96469499c369a9a3b77e80.jpg',
      [
        new Ingredient('Chorizo sausage', 1, 'pcs'),
        new Ingredient('Chipotle Peppers', 2, 'tbs'),
        new Ingredient('Tortillas', 4, 'corn'),
      ]
    ),
  ];

  constructor() {}

  getRecipes() {
    return [...this.recipes];
  }

  getRecipeById(id: number) {
    return [...this.recipes].find((recipe) => recipe.id === id);
  }

  addRecipe(recipe: Recipe) {
    this.recipes = [...this.recipes, recipe];
    this.changeRecipes.next([...this.recipes]);
  }

  updateRecipe(id: number, recipe: Omit<Recipe, 'id'>) {
    this.recipes = this.recipes.map((item) =>
      item.id === id ? { ...item, ...recipe } : item
    );
    this.changeRecipes.next([...this.recipes]);
  }

  deleteRecipe(id: number) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id);
    this.changeRecipes.next([...this.recipes]);
  }
}
