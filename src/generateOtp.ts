import { Otp } from './Otp';
import { OtpConfig } from './types/OtpConfig';

function generateOtp(config?: OtpConfig): string {
    const otp: Otp = new Otp(config);

    return otp.generate();
}

export default generateOtp;
