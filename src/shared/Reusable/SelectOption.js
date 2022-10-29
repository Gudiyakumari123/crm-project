import React from "react";
import "./style.scss";

const SelectOption = ({
  label,
  color,
  value,
  type,
  size,
  name,
  placeholder,
  isError,
  onChange,
  required,
  errorMsg,
  ...props
}) => {
  return (
    <>
      <div className="input-fields">
        <label htmlFor="" className="label">
          {label}
        </label>
        <select>
          <option></option>
        </select>
      </div>
    </>
  );
};

export default SelectOption;
