import { Component, OnInit } from '@angular/core';
import { Recipe } from './model/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe:Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  onItemClicked(recipe:Recipe){
    console.log("clicked recipe "+recipe.name);
    this.recipe = recipe;
  }
}
