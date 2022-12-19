import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
   @Input() recipe;
   @Output() itemClickEmitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  onRecipeItemClicked(){
     this.itemClickEmitter.emit();
  }
}
