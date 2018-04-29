import { Component, OnInit } from '@angular/core';
import { MyPostService } from '../../services/my-post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {

  constructor(private service: MyPostService, private route: Router, private activatedRoute: ActivatedRoute) { }
  postTitle:string = "";
  postBody:string = "";
  private id:number;
  ngOnInit() {
    //let id = this.activatedRoute.snapshot.paramMap.get('id');
    //let id = this.activatedRoute.snapshot.queryParamMap.get('name');
    
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.service.get(this.id)
        .subscribe(response => {
          this.postTitle = response.title;
          this.postBody = response.body;
        });
    });

  }

  updateCard(title, body){
    let card = {
      title: title,
      body: body
    }
    this.service.patch(this.id, card)
      .subscribe(response => {
        alert("Card Updated... ");
        this.route.navigate(['/crud']);
      });
  }
}
