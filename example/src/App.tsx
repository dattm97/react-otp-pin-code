import React, { useRef } from 'react';
import OTPInput from 'react-otp-pin-code';
import './App.css';

const App: React.FC = () => {
  const refInput = useRef<any>(null)
  return (
    <div className="App">
      - Number OTP:
      <OTPInput
        ref={refInput}
        autoFocus
        isNumberInput
        length={4}
        className="otpContainer"
        inputClassName="otpInput"
        onChangeOTP={(otp: any) => {
          console.log('String OTP: ', otp)
          if (otp.length === 4) {
            if (otp !== '1234') {
              setTimeout(() => {
                refInput?.current?.clear()
              }, 1000)
              // setTimeout(() => {
              //   refInput.current.blur()
              // }, 1100)
            }
          }
        }}
      />
      - String OTP:
      <OTPInput
        autoFocus
        length={4}
        className="otpContainer"
        inputClassName="otpInput"
        onChangeOTP={(otp: any) => {
          console.log('String OTP: ', otp)
          if (otp.length === 4) {
            setTimeout(() => {
              refInput?.current?.clear()
            }, 1000)
          }
        }}
      />
    </div>
  );
};

export default App;