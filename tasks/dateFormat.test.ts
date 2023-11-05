/*
 * @Email: allen0101stanton@outlook.com
 * @Author: ww
 * @Description: 
 */
import { expect } from 'chai';
import { formatDates, formatTimestamp } from '../src/dateFormats';

describe('formatDates functions', () => {
    it('formatDates', () => {
        expect(formatDates(new Date(),"yyyy-MM-dd hh:mm:ss"));
    });
})
