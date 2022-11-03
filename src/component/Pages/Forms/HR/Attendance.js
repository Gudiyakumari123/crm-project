import React, { Fragment } from "react";
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import Toggle from "../../../../shared/Reusable/ToggleSwitch";

const StaffList = () => {
  return (
    <Fragment>
      <Header />
      <SubHeader />
      <div className="form__container">
        <div className="form__content">
          <div className="title-display">
            <div className="title"> Staff Attendance</div>
          </div>
          <div className="form__wrapper">
            <div className="form__left">
              <div className="field__row">
                <div className="fields">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Staff Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Department</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Reporting Line</th>
                        <th scope="col">Employee Type</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <th scope="row">SS0001</th>
                        <td>Deva Subramani</td>
                        <td>Deva.Subramani@selromsoft.com</td>
                        <td>Development Team</td>
                        <td>Team Lead</td>
                        <td>Selva Kumar</td>
                        <td>Employee</td>
                        <td>
                          <Toggle />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">SS0002</th>
                        <td>Gudiya Kumari</td>
                        <td>gudiya.kumari@selromsoft.com</td>
                        <td>Development Team</td>
                        <td>React Developer</td>
                        <td>Deva Subramani</td>
                        <td>Employee</td>
                        <td>
                          <Toggle />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">SS0003</th>
                        <td>Priyanka Siddappa</td>
                        <td>priyanka.siddappa@selromsoft.com</td>
                        <td>Development Team</td>
                        <td>Java Developer</td>
                        <td>Deva Subramani</td>
                        <td>Employee</td>
                        <td>
                          <Toggle />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};
export default StaffList;
