import React from "react";
// Phone Number
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Try = ({ isError }) => {
  return (
    <>
      <div className="field__row">
        <div className="input-fields">
          <label htmlFor="" className="label">
            Phone
          </label>
          <PhoneInput
            name="phone"
            className="form-control phone-style"
            international
            defaultCountry="IN"
            onChange={console.log}
          />
        </div>

        <div className="input-fields">
          <label htmlFor="" className="label">
            AltPhone
          </label>
          <PhoneInput
            className="form-control altphone-style"
           
            name="phone"
            international
            defaultCountry="IN"
            onChange={console.log}
          />
        </div>
      </div>
    </>
  );
};
export default Try;
