import { AppBadRequestError } from './../errors/app-bad-request-error';
import { AppNotFoundError } from './../errors/app-not-found-error';
import { AppErrors } from './../errors/app-errors';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  constructor(private url:string, private http: Http) { }

  getAll(){
    return this.http.get(this.url)
        .retry(3)
        .map(response => response.json())
        .catch(this.handleError);
  }

  get(id){
    return this.http.get(this.url + '/' + id)
        .retry(3)
        .map(response => response.json())
        .catch(this.handleError);
  }

  post(data){
    return this.http.post(this.url, JSON.stringify(data))
        .map(response => response.json())
        .catch(this.handleError);
  }

  patch(id, data){
    return this.http.patch(this.url + '/' + id, JSON.stringify(data))
        .map(response => response.json())  
        .catch(this.handleError);
  }

  delete(id){
    return this.http.delete(this.url + '/' + id)
        .map(response => response.json())  
        .catch(this.handleError);
  }

  handleError(error: Response){
    if(error.status === 404 || error.status === 0)
      return Observable.throw(new AppNotFoundError());

    if(error.status === 400)
      return Observable.throw(new AppBadRequestError());
    
    return Observable.throw(new AppErrors(error));
  }
}
