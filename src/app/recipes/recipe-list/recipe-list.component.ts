import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is a simple test', 'https://images.media-allrecipes.com/images/56589.png'),
    new Recipe('A Test Recipe2', 'This is a simple test', 'https://images.media-allrecipes.com/images/56589.png')

  ];
  constructor() { }

  ngOnInit() {
  }

}
