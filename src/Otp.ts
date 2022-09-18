import { OtpConfig } from './types/OtpConfig';
import { DEFAULT_OTP_CONFIG } from './DEFAULT_OTP_CONFIG';
import { ALPHANUMERIC } from './constants/alphanumeric';

export class Otp {
    constructor(private readonly config: OtpConfig = DEFAULT_OTP_CONFIG) {
        this.config = { ...DEFAULT_OTP_CONFIG, ...config };
    }

    public getConfig(): OtpConfig {
        return this.config;
    }

    /**
     * Generate OTP string depends on configuration.
     */
    public generate(): string {
        switch (true) {
            case this.config.digitsOnly:
                return this.digitsOnlyOtp();
            default:
                return this.alphanumericOtp();
        }
    }

    /**
     * Return OTP string containing only digits.
     */
    private digitsOnlyOtp(): string {
        return Array.from({ length: <number>this.config.length }, () => Math.floor(Math.random() * 10)).join('');
    }

    /**
     * Return OTP string containing digits and letters.
     * Lowercase can be disabled from the configuration (allowLowercase: false).
     */
    private alphanumericOtp(): string {
        let otp: string = Array.from(
            { length: <number>this.config.length },
            () => ALPHANUMERIC[Math.floor(Math.random() * ALPHANUMERIC.length)],
        ).join('');

        if (!this.config.allowLowercase) {
            otp = otp.toUpperCase();
        }

        return otp;
    }
}
