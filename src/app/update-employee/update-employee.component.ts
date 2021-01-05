import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Employee} from '../employee';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id: number;
  employee: Employee = new Employee();
  form = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    emailID: new FormControl('', [Validators.required , Validators.email])
  });
  constructor(private employeeService: EmployeeService , private activeRoute: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params[`id`];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    },
      error => console.log(error));
  }
  // tslint:disable-next-line:typedef
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    this.employeeService.updateEmployeeById(this.id , this.employee).subscribe(data => {
      this.goToEmployeeList();
    } ,
      error => console.log(error));
    alert(JSON.stringify(this.form.value));
  }
}
