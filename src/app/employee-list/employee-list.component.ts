import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  searchValue: string;
  constructor(private employeeService: EmployeeService , private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  // tslint:disable-next-line:typedef
   getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }
  // view employee
  // tslint:disable-next-line:typedef
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }
  // To update employee Details
  // tslint:disable-next-line:typedef
  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }
  // To Delete Employee by id
  // tslint:disable-next-line:typedef
  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    });
  }
}
