import React, { useState } from "react";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function PhoneInputBox({
  label,
  color,
  value,
  name,
  placeholder,
  isError,
  onChange,
  ...props
}) {
  const [phone, setPhone] = useState();
  return (
    <>
      <div className="input-fields">
        <label htmlFor="" className="label">
          {label}
        </label>
        <PhoneInput
          value={value}
          className="form-control"
          international
          name={name}
          defaultCountry="IN"
          placeholder={placeholder}
          onChange={onChange}
          {...props}
        />
      </div>
    </>
  );
}

export default PhoneInputBox;
