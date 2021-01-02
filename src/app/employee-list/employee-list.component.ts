import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor() { }

  ngOnInit(): void {
    this.employees = [{
      id: 1,
      firstName: 'krishna',
      lastName: 'Saparia',
      emailID: 'k12@gmail.com'
    },
      {
        id: 2,
        firstName: 'ishna',
        lastName: 'paria',
        emailID: 'k2@gmail.com'
      }];
  }

}
