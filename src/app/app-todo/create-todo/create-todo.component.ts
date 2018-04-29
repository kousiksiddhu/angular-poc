import { AppBadRequestError } from './../../errors/app-bad-request-error';
import { AppErrors } from './../../errors/app-errors';
import { AppNotFoundError } from './../../errors/app-not-found-error';
import { MyPostService } from './../../services/my-post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  constructor(private service: MyPostService, private router: Router) { }
  
  ngOnInit() {
  }

  createCard(title:HTMLInputElement, para:HTMLTextAreaElement){
    let card = {
      title: title.value,
      body: para.value
    };

    this.service.post(card)
      .subscribe(
        response => { 
          alert("Todo created...");
          this.router.navigate(['/crud']);
        },
        (error: AppErrors) => {
          if(error instanceof AppBadRequestError){
            alert("Bad Request error");
            console.log(error);
          }else throw error;
        }
      );
  }
}
