import { DataService } from './../common/data.service';
import { AppBadRequestError } from './../errors/app-bad-request-error';
import { AppNotFoundError } from './../errors/app-not-found-error';
import { AppErrors } from './../errors/app-errors';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MyPostService extends DataService {
  
  constructor(http:Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }

}
