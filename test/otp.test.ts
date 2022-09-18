import { Otp } from '../src/Otp';
import { OtpConfig } from '../src/types/OtpConfig';
import { expect } from 'chai';

describe('Testing Otp class methods', function () {
    it('Should be default config', function () {
        const otpInstance: Otp = new Otp();
        const config: OtpConfig = otpInstance.getConfig();

        expect(config.length).equal(6);
        expect(config.digitsOnly).equal(true);
        expect(config.allowLowercase).equal(true);
    });

    it('Should return digits only Otp', function () {
        const otpInstance: Otp = new Otp(); // Default config length is 6 with digits only
        const otp: string = otpInstance.generate();

        expect(otp).to.be.length(6);
        expect(otp).to.be.a('string');
        expect(parseInt(otp)).to.be.a('number');
    });

    it('Should return alphanumeric Otp with a length of 10 with uppercase only', function () {
        const otpInstance: Otp = new Otp({
            digitsOnly: false,
            length: 10,
            allowLowercase: false,
        });
        const otp: string = otpInstance.generate();
        expect(otp).to.be.length(10);
        expect(otp).to.be.equal(otp.toUpperCase());
    });
});
