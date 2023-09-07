import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-editable-recipe-form',
  templateUrl: './editable-recipe-form.component.html',
  styleUrls: ['./editable-recipe-form.component.scss'],
})
export class EditableRecipeFormComponent implements OnInit {
  public id!: number;
  public editMode = false;
  public recipeForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipesService: RecipesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = Number(params['id']);
      this.editMode = Boolean(params['id']);
      this.initForm();
    });
  }

  get controls() {
    // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onSubmit() {
    const recipes = this.recipesService.getRecipes();
    const nextId = recipes[recipes.length - 1].id + 1;
    const { name, description, image, ingredients } = this.recipeForm.value;
    const recipe = new Recipe(nextId, name, description, image, ingredients);
    if (this.editMode) {
      this.recipesService.updateRecipe(this.id, {
        name,
        imagePath: image,
        description,
        ingredients,
      });
    } else {
      this.recipesService.addRecipe(recipe);
    }
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, [Validators.required]),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
        unit: new FormControl(null, [Validators.required]),
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  private initForm() {
    let name = '';
    let description = '';
    let image = '';
    let ingredients: FormArray = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipesService.getRecipeById(this.id);
      name = recipe?.name ?? '';
      description = recipe?.description ?? '';
      image = recipe?.imagePath ?? '';

      if (recipe?.ingredients) {
        for (let ingredient of recipe.ingredients) {
          ingredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, [Validators.required]),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
              unit: new FormControl(ingredient.unit, [Validators.required]),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      image: new FormControl(image, [Validators.required]),
      ingredients,
    });
  }
}
