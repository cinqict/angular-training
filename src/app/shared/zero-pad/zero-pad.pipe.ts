import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroPad'
})
export class ZeroPadPipe implements PipeTransform {
  public transform(num: string | undefined, places: number): string | null {
    if (!num) {
      return null;
    }
    const zero = places - num.length + 1;
    return Array(+(zero > 0 && zero)).join('0') + num;
  }
}
