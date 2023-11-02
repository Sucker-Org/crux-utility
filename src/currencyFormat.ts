/*
 * @Email: allen0101stanton@outlook.com
 * @Author: ww
 * @Description: 
 */

export function currencyFormat(num: number): string {
    if (num === null || num === undefined) return '';

    num = Number(num);

    if (num === 0) return '0.00';

    let result = num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

    if (num > 9999) {
        let unit = 'K';
        if (num > 999999) {
            unit = 'M';
            result = (num / 1000000).toFixed(2) + ' ' + unit;
        } else {
            result = (num / 1000).toFixed(2) + ' ' + unit;
        }
    }

    return result;
}
