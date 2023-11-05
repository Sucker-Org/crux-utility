/*
 * @Email: allen0101stanton@outlook.com
 * @Author: ww
 * @Description: 
 */
import { expect } from 'chai';
import {isValidChinesePhoneNumber} from '../src/Validator';

describe('isValidChinesePhoneNumber functions', () => {
    it('139 8484 2424 是一个有效的大陆手机号', () => {
        expect(isValidChinesePhoneNumber('138 0000 9999')).equal(true);
    });
    it('18621882188 是一个有效的大陆手机号',()=>{
        expect(isValidChinesePhoneNumber('15885508762')).to.be.equal(true);
    })
    it('25885不是是一个有效的大陆手机号',()=>{
        expect(isValidChinesePhoneNumber('25885')).to.be.equal(false);
    })
})
