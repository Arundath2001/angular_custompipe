import { Component } from '@angular/core';
interface Student {
  id: number;
  name: string;
  gender: string;
  place: string;
}
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  students: Student[] = [
    { id: 1, name: 'Arundath', gender: 'Male',place: 'Kozhikode' },
    { id: 2, name: 'Jareesh', gender: 'Male', place: 'Kannur' },
    { id: 3, name: 'Dhanya', gender: 'Female',place: 'Kozhikode' },
    { id: 4, name: 'Aiswarya', gender:'Female',place: 'kannur'}
  ];
}
