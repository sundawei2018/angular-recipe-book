import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is a simple test', 'https://images.media-allrecipes.com/images/56589.png'),
    new Recipe('A Test Recipe2', 'Another test', 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg')

  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
