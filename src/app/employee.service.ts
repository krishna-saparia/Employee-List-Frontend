import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';

// To focus on presenting data and delegate data access to a service.
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // Store a URL which contains database from backend side.
  private baseURL = 'http://localhost:8080/api/v1/employees';

  // Use HttpClient for communicating with backend Service.
  constructor(private httpClient: HttpClient) {}

  // Observables provide support for passing messages between parts of application
  // It uses for  event handling, asynchronous programming, and handling multiple values.
  // Get List from Employee Class.
  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  // For Create new data of employee.
  createEmployeeList(employee: Employee): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  // Get Employee Details Through ID
  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  // Update Employee Details By ID and use put method to change data.
  updateEmployeeById(id: number , employee: Employee): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  // Delete Employee List by id using delete method.
  // tslint:disable-next-line:ban-types
  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
