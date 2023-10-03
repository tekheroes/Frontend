import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, replaceChar? : string): any {
    if (value === undefined) {
      return value;
    }
    // Replace with the specified character
    if (replaceChar) {
      return replaceChar.repeat(10);
    }
    // Replace value with asterisks
    return '*'.repeat(10);
  }

}
