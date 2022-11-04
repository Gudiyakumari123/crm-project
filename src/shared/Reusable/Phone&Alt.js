import React from "react";
// Phone Number
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
export default function Try({ isError }) {
  return (
    <>
      <div className="field__row">
        <div className="input-fields">
          <label htmlFor="" className="label">
            Phone
          </label>
          <PhoneInput
            style={{
              marginLeft: "38px",
            }}
            name="phone"
            className="form-control"
            international
            defaultCountry="IN"
            onChange={console.log}
          />
          <p className="show-errors-left"> {isError} </p>
        </div>

        <div className="input-fields">
          <label htmlFor="" className="label">
            AltPhone
          </label>
          <PhoneInput
            style={{
              marginLeft: "35px",
              marginButtom: "5px",
            }}
            name="phone"
            className="form-control"
            international
            defaultCountry="IN"
            onChange={console.log}
          />
        </div>
      </div>
    </>
  );
}
