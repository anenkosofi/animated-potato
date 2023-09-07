import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { EditableShoppingListComponent } from './components/editable-shopping-list/editable-shopping-list.component';
import { EditableRecipeFormComponent } from './components/editable-recipe-form/editable-recipe-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: 'new',
        component: EditableRecipeFormComponent,
      },
      {
        path: ':id',
        component: RecipeDetailsComponent,
      },
      {
        path: ':id/edit',
        component: EditableRecipeFormComponent,
      },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    children: [
      {
        path: 'edit',
        component: EditableShoppingListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
