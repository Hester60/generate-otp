# Generate OTP

## Overview

Generate one-time passwords based on configuration.

## Install

```shell
$ npm i generate-otp
```

## Usage

To generate OTP, you need to call generateOtp() by passing your configuration (optional):

```shell
const otp: string = generateOtp();
```

Default configuration, you can overwrite it with your own values:

```typescript
import { OtpConfig } from './OtpConfig';

const config: OtpConfig = {
    length: 6,
    digitsOnly: true,
    allowUppercase: true,
}
```

Custom configuration example:

```typescript
import generateOtp from './generateOtp';

const otp: string = generateOtp({
    length: 10,
    digitsOnly: false
})

console.log('Otp: ', otp);
```

This configuration will generate an Otp with a length of 10 and alphanumeric characters with lower and uppercase:

```typescript
// console.log() result
Otp: auYYD6opd9
```
