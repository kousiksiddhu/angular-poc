import { favEmitEvent } from './favourite/favourite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  profile={
    title:"sample title",
    isFavourite: true
  }

  onChange($event: favEmitEvent){
    console.log("Change event trigered...", $event);
  }
}
