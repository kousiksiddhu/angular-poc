import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {

  constructor() { }

  get projectNames(){
    return ['project A', 'project B', 'project C'];
  }

}
