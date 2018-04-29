import { AppErrors } from './../../errors/app-errors';
import { MyPostService } from './../../services/my-post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-read-todo',
  templateUrl: './read-todo.component.html',
  styleUrls: ['./read-todo.component.css']
})
export class ReadTodoComponent implements OnInit {

  constructor(private service: MyPostService, private router: Router) { }

  postData;
  
  ngOnInit() {
    this.service.getAll()
      .subscribe(response => this.postData = response);
  }

  deleteCard(card){
    let index = this.postData.indexOf(card);
    this.postData.splice(index, 1);

    this.service.delete(card.id)
      .subscribe( response => {
        alert("Card deleted in db.. ");
      },
      (error: AppErrors) => {
        this.postData.splice(index,0,card);
        throw error;
      }
    );
  }
}
