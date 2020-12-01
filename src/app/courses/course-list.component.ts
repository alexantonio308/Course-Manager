import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit{
  filteredCourses: Course[] = [];
  // tslint:disable-next-line:variable-name
  _courses: Course[] = [];
  // tslint:disable-next-line:variable-name
  _filterBy: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
  }

  set filter(value: string){
    this._filterBy = value;
    // tslint:disable-next-line:max-line-length
    this.filteredCourses =  this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }
  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }
}


