import { expect } from 'chai';
import generateOtp from '../src';

describe('Testing generateOtp method', function () {
    it('Should return Otp with default configuration', function () {
        const otp: string = generateOtp();

        expect(otp.length).equal(6);
        expect(otp).to.be.a('string');
        expect(parseInt(otp)).to.be.a('number');
    });

    it('Should return alphanumeric Otp with custom configuration', function () {
        const otp: string = generateOtp({
            digitsOnly: false,
            length: 10,
            allowLowercase: false,
        });

        expect(otp).to.be.length(10);
        expect(otp).to.be.equal(otp.toUpperCase());
    });
});
