import React from 'react';
import './toggle.scss';
function Toggle() {
  return (
    <>
      
      <div className='toggle-scss'>
      <div className="toggle-switch">
      <div className="Yearly"> Present </div>

                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                    <div className="monthly"> Absent </div>
                
                </div>
      </div>

    </>
  );
};
export default Toggle;