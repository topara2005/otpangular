import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mainObj: any = {};
  constructor() {}

  ngOnInit(): void {}

  myOTP: any;
  ngAfterViewInit() {
    if ('OTPCredential' in window) {
      this.mainObj.isWebOtpSupported = true;
      debugger;
      window.addEventListener('DOMContentLoaded', (e) => {
        debugger;

        const ac = new AbortController();

        var reqObj = {
          otp: { transport: ['sms'] },
          signal: ac.signal,
        };
        navigator.credentials
          .get(reqObj)
          .then((otp: any) => {
            debugger;
            if (otp) {
              if (otp && otp.code) {
                this.myOTP = otp.code;
              }
            }
          })
          .catch((err) => {
            debugger;
            alert(JSON.stringify(err));
          });
      });
    } else {
      // this.myOTP = 521456;
      this.mainObj.isWebOtpSupported = false;
      alert('Web OTP API not supported, Please enter manually.');

      // alert('');
    }
  }
}
