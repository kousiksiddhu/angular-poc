import { ProjectsService } from './../projects.service';
import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses;
  projects;
  complexObj;
  constructor(coursesService: CoursesService, projectsService: ProjectsService) {
    this.courses = coursesService.getCourses();
    this.projects = projectsService.projectNames;
    this.complexObj = coursesService.getComplexObj();
  }

  ngOnInit() {
  }

  getCourseTitle(){    
    return 'List of Courses:';
  }

  //courses = ['Angular', 'Ionic', 'React', 'React Native'];

}
