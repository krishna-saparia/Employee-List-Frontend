import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from './employee';
// A Pipe transform interface
@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  // Invokes the transform method with the value of a binding as the first argument,
  // and any parameters as the second argument in list form.
  transform(employee: Employee[] , searchvalue: string): Employee[] {
    if (!employee || !searchvalue) {
      return employee;
    }
    // Use filter to search data by first name and last name.
    return employee.filter(data =>
      data.first_name.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase()) ||
      data.last_name.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
    );
  }
}
