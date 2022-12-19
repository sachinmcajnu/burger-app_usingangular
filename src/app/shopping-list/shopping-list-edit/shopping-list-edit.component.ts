import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {


  @ViewChild('name') nameInput : ElementRef;
  @ViewChild('amount') amountInput:ElementRef;
  @Output() saved = new EventEmitter<Ingredient>();

   constructor() { }

  ngOnInit(): void {
  }

  onSaveClicked() {
     let name = this.nameInput.nativeElement.value;
     let amount = this.amountInput.nativeElement.value;
     let ingredient = new Ingredient(name,amount);
      this.saved.emit(ingredient);
    }


}
