import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id: number;
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
  constructor(private employeeService: EmployeeService , private activeRoute: ActivatedRoute , private router: Router) { }

  // Activated route snapshot uses to bring data of employee in field so user can see what they want to update.
  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params[`id`];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
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
    this.employeeService.updateEmployeeById(this.id , this.employee).subscribe(data => {
      this.goToEmployeeList();
    } ,
      error => console.log(error));
    alert(JSON.stringify(this.form.value));
  }
}
