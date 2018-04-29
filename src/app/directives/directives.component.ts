import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  whatToShow = 'courses';
  constructor() { 
  }

  ngOnInit() {
  }

  changeCasing($event){
    $event.target.value = $event.target.value.toUpperCase();
  }

  logValue (value){
    console.log(value);
  }
  emailConfirm;
  logModelValue(){
    console.log(this.emailConfirm);
  }

}
