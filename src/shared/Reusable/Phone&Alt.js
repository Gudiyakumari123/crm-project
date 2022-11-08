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
};
export default Try;
