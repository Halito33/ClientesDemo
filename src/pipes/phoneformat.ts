import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: string | number): string {
    if (!value) return '';

    let phone = value.toString().replace(/\s+/g, '');

    if (!phone.startsWith('+569')) {
      phone = '+569' + phone.replace(/^(\+569)?/, '');
    }

    let digits = phone.replace('+569', '');

    let formatted = digits.replace(/(.{4})/g, '$1 ').trim();

    return `+569 ${formatted}`;
  }
}
