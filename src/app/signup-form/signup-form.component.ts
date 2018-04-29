import { ValidatorInterface } from './validator.interface';
import { Component, group } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    username: new FormControl('',[
      Validators.required, 
      ValidatorInterface.containsSpace
    ],
      ValidatorInterface.usernameExists
    ),
    password: new FormControl('', Validators.required)
  });

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  submitForm(){
    let isRegistered;
    //isRegistered = authService.register(this.form.value);

    if(!isRegistered){
      this.form.setErrors({
        formError: "Register failed, Try after sometime."
      })
    }
  }

//USING FORM BUILDER

  // constructor(fb: FormBuilder){
  //   this.form = fb.group({
  //     name: [],
  //     contact: fb.group({
  //       email: [],
  //       mobile: []
  //     }),
  //     topics: fb.array([])
  //   })
  // }
  
}
