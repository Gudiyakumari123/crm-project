import React from "react";

const Toggle = () => {
  return (
    <>
      <div className="toggle-scss">
        <div className="toggle-switch">
          <div className="Yearly"> Present </div>

          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <div className="monthly"> Absent </div>
        </div>
      </div>
    </>
  );
};
export default Toggle;
