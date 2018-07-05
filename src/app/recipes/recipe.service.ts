import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is a simple test', 'https://images.media-allrecipes.com/images/56589.png'),
    new Recipe('A Test Recipe2', 'Another test', 'https://images.media-allrecipes.com/images/56589.png')

  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
