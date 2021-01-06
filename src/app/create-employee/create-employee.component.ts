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
  // A form contains validation by using form-control
  form = new FormGroup({
    // Will Check A first name field is empty or not.
    first_name: new FormControl('', Validators.required),
    // Will Check A last name field is empty or not.
    last_name: new FormControl('', Validators.required),
    // Will Check A email id field is empty or not and Also use specific validation of email address.
    emailID: new FormControl('', [Validators.required , Validators.email])
  });
  constructor(private employeeService: EmployeeService , private router: Router) { }

  ngOnInit(): void {
  }
  // Save data from user enters.
  // tslint:disable-next-line:typedef
  saveEmployee(){
    this.employeeService.createEmployeeList(this.employee).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
  }
  // Add navigation to go on employee -list
  // tslint:disable-next-line:typedef
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  // onSubmit Event validates data before clicking on submit and show json data as a alert message to confirm.
  // tslint:disable-next-line:typedef
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
    alert(JSON.stringify(this.form.value));
  }
}
