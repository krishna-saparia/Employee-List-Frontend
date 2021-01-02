import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    // this.employees = [{
    //   id: 1,
    //   firstName: 'krishna',
    //   lastName: 'Saparia',
    //   emailID: 'k12@gmail.com'
    // },
    //   {
    //     id: 2,
    //     firstName: 'ishna',
    //     lastName: 'paria',
    //     emailID: 'k2@gmail.com'
    //   }];
    this.getEmployees();
  }
  // tslint:disable-next-line:typedef
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }
}
