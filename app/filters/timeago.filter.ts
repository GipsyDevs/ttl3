import {Pipe, PipeTransform} from "@angular/core";
import {DatePipe} from "@angular/common";


@Pipe({
    name: 'timeago',

})
export class TimeAgoPipe implements PipeTransform {
    maxPeriod = 365 * 24 * 60 * 60 * 1000;
    afterMaxDateFormat = 'medium';

    transform(value: number): string {
        console.log(value);
        let diff: number = new Date().getTime() - new Date(value).getTime();

        if (diff > this.maxPeriod) {
            'fa';
            let datePipe: DatePipe = new DatePipe('fa');
            return datePipe.transform(value, this.afterMaxDateFormat)
        }

        let period: { [key: string]: number } = {
                ثانیه: 1000,
                دقیقه: 60 * 1000,
                ساعت: 60 * 60 * 1000,
                روز: 24 * 60 * 60 * 1000,
                هفته: 7 * 24 * 60 * 1000 * 60,
                ماه: 30 * 24 * 60 * 1000 * 60,
                سال: 365 * 24 * 60 * 1000 * 60
            },
            i: string,
            j: string;

        for (i in period) {
            if (diff < period[i]) {
                return this.makeupStr(j || 'ثانیه', Math.round(diff / (period[j] || 1000)))
            }
            j = i
        }
        return this.makeupStr(i, Math.round(diff / period[i]))
    }

    makeupStr(unit: string, n: number) {
        return n + ' ' + unit + ' قبل';
    }
}