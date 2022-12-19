import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.css'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  onLoaded(feature: string) {
    this.loadedFeature.emit(feature);
  }

  ngOnInit(){
      this.loadedFeature.emit('recipe');
  }

  @Output() loadedFeature = new EventEmitter<string>();
}
