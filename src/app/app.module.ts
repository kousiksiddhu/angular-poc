import { AppErrorHandler } from './errors/app-error-handler';
import { MyPostService } from './services/my-post.service';
import { ProjectsService } from './projects.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule, ErrorHandler } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses.service';
import { DirectivesComponent } from './directives/directives.component';
import { FormatInputDirective } from './format-input.directive';
import { ValidateEmailPipe } from './validate-email.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { PlayAroundComponent } from './play-around/play-around.component';
import { MyFormComponent } from './my-form/my-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { TodoComponent } from './todo/todo.component';
import { CrudComponent } from './crud/crud.component';
import { HttpModule } from '@angular/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CreateTodoComponent } from './app-todo/create-todo/create-todo.component';
import { ReadTodoComponent } from './app-todo/read-todo/read-todo.component';
import { UpdateTodoComponent } from './app-todo/update-todo/update-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    CoursesComponent,
    DirectivesComponent,
    FormatInputDirective,
    ValidateEmailPipe,
    FavouriteComponent,
    PlayAroundComponent,
    MyFormComponent,
    SignupFormComponent,
    TodoComponent,
    CrudComponent,
    NavBarComponent,
    HomePageComponent,
    ErrorPageComponent,
    CreateTodoComponent,
    ReadTodoComponent,
    UpdateTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([{
      path: '', 
      component: HomePageComponent
    },
    {
      path: 'todo', 
      component: CrudComponent,
    },
    {
      path: 'crud/create', 
      component: CreateTodoComponent,
    },
    {
      path: 'crud/update/:id', 
      component: UpdateTodoComponent,
    },
    {
      path: 'crud', 
      component: ReadTodoComponent,
    },
    {
      path: '**',
      component: ErrorPageComponent
    }
  ])
  ],
  providers: [
    CoursesService,
    ProjectsService,
    MyPostService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
