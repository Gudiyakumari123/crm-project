import React from "react";

import Fade from "react-reveal/Fade";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";



function PhoneInputBox({
  label,
  color,
  value,
  name,
  placeholder,
  isError,
  errorMsg,
  ...props
}) {
  return (
    <>
      <div className="input-fields">
        <label htmlFor="" className="label">
          {label}
        </label>
        <PhoneInput
          value={value}
          // className="form-control"
          international
          name={name}
          defaultCountry="IN"
          placeholder={placeholder}
          // onChange={onChange}
          {...props}
        />
      </div>
      {errorMsg ? (
        <>
          <Fade top>
            <div className="error-messages">
              <p className="validate">
                <i className="bx bx-info-circle"></i>
                {/* {errorMsg} */}
              </p>
            </div>
          </Fade>
        </>
      ) : null}
    </>
  );
}

export default PhoneInputBox;
