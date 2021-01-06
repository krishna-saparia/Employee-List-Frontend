import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee-List-Frontend';
  // employees: Employee[];
  // firstName: any;
  // constructor(private employeeService: EmployeeService){}
  //
  // ngOnInit(): void {
  //   this.getEmployees();
  // }
  // // tslint:disable-next-line:typedef
  // getEmployees(){
  //   this.employeeService.getEmployeeList().subscribe(data => {
  //     this.employees = data;
  //   });
  // }
  // // tslint:disable-next-line:typedef
  // onSearch(){
  //   if (this.firstName === ''){
  //     this.ngOnInit();
  //   }
  //   else {
  //     this.employees = this.employees.filter(res => {
  //       return res.first_name.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
  //     });
  //   }
  // }
}
