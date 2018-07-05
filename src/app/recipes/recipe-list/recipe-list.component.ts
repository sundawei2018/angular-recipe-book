import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is a simple test', 'https://images.media-allrecipes.com/images/56589.png'),
    new Recipe('A Test Recipe2', 'Another test', 'https://images.media-allrecipes.com/images/56589.png')

  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe : Recipe) {
    this.recipeWasSelected.emit(recipe);
  }



}
