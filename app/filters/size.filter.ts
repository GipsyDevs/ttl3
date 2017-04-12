/**
 * Created by Pedram2 on 3/30/2017.
 */
import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
    name: 'size',

})
export class SizePipe implements PipeTransform {
    transform(bytes: number, precision = 1): string {
        if (isNaN(parseFloat(bytes.toString())) || !isFinite(bytes)) return '-';
        if (typeof precision === 'undefined') precision = 1;
        let units = ['بایت', 'کیلوبایت', 'مگابایت', 'گیگابایت', 'ترابایت', 'پتابایت'],
            number = Math.floor(Math.log(bytes) / Math.log(1024));
        return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) + ' ' + units[number];
    }
}