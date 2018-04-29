import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input('fav') isFavourite:boolean;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isFavourite  = this.isFavourite ? false : true;
    this.change.emit({fav: this.isFavourite});
  }

}

export interface favEmitEvent {
  fav: boolean;
}