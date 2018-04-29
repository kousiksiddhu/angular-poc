import { Component } from '@angular/core';

@Component({
  selector: 'my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent {

  log(value){
    console.log(value);
  }

  submitFeedBack(data){
    console.log(data.value);
  }
}
