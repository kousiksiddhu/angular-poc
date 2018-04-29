import { AppBadRequestError } from './../errors/app-bad-request-error';
import { AppErrors } from './../errors/app-errors';
import { AppNotFoundError } from './../errors/app-not-found-error';
import { MyPostService } from './../services/my-post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor(private service: MyPostService) { }

  postData;
  
  ngOnInit() {
    this.service.getAll()
      .subscribe(response => this.postData = response);
  }

  createCard(title:HTMLInputElement, para:HTMLTextAreaElement){
    let card = {
      id: this.postData.length + 1,
      title: title.value,
      body: para.value
    };

    this.postData.splice(0,0,card);

    this.service.post(card)
      .subscribe(
        response => { },
        (error: AppErrors) => {
          this.postData.splice(0,1);

          if(error instanceof AppBadRequestError){
            alert("Bad Request error");
            console.log(error);
          }else throw error;
        }
      );
  }

  updateCard(card, title, para){
    let index = this.postData.indexOf(card);
    let isEditMode = this.postData[index].editMode;
    
    this.service.patch(card.id, card)
      .subscribe(response => {
        if(isEditMode){
          this.postData[index].title = title.value;
          this.postData[index].body = para.value;
        }

        this.postData[index].editMode = isEditMode ? false : true;
      });
  }

  deleteCard(card){
    let index = this.postData.indexOf(card);
    this.postData.splice(index, 1);

    this.service.delete(card.id)
      .subscribe(
        null,
        (error: AppErrors) => {
          this.postData.splice(index,0,card);
          throw error;
        }
      );
  }

}
