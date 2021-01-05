import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  form = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    emailID: new FormControl('', [Validators.required , Validators.email])
  });
  submit = false;
  constructor(private employeeService: EmployeeService , private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  saveEmployee(){
    this.employeeService.createEmployeeList(this.employee).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
