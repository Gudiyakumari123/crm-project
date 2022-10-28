import React from "react";
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./staffPayroll.scss";
function StaffPayrol() {
  return (
    <>
      <Header />
      <SubHeader />
      <div className="form__container">
        <div className="form__content">
          <div className="title-display"></div>
          <div className="form__wrapper">
            <div className="form__left">
              <div className="field__row">
                <div className="fields">
                  {/* <Card/> */}
                  {/* first details */}
                  <div className="last-section">
                    <div className="dept">
                      <table class="table table-borderless">
                        <thead>
                          <tr className="t1">
                            <td scope="col">Staff Id</td>
                            <td scope="col">Staff Name</td>
                            <td scope="col">Email Id</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="content">
                            <th scope="row">SS0001</th>
                            <td scope="row">Gudiya Kumari</td>
                            <td>gudiya.kumari@selromsoft.com</td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="table table-borderless">
                        <thead>
                          <tr className="t1">
                            <td scope="col">Department</td>
                            <td scope="col">Designation</td>
                            <td scope="col">Reporting Line</td>
                            <td scope="col">Employee Type</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="content">
                            <th scope="row">Devlopment Team</th>
                            <td scope="row">Jr.Software Engineer</td>
                            <td>Deva subramani</td>
                            <td>Developer</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="present">
                      <div>
                        <table class="table table-borderless">
                          <thead>
                            <tr className="t1">
                              <td scope="col">Present Days</td>
                              <td scope="col">Absent Days</td>
                              <td scope="col">Salary/Days</td>
                              <td scope="col">Salary/Month</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="content">
                              <td>20</td>
                              <td>10</td>
                              <td>500</td>
                              <td>15,600</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <Button className=" create-back btn-color">
                        Generate
                      </Button>
                    </div>
                  </div>
                  <hr />
                  {/* second list */}
                  <div className="last-section">
                    <div className="dept">
                      <table class="table table-borderless">
                        <thead>
                          <tr className="t1">
                            <td scope="col">Staff Id</td>
                            <td scope="col">Staff Name</td>
                            <td scope="col">Email Id</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="content">
                            <th scope="row">SS0002</th>
                            <td scope="row">Umar Farook</td>
                            <td>umar.farook@selromsoft.com</td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="table table-borderless">
                        <thead>
                          <tr className="t1">
                            <td scope="col">Department</td>
                            <td scope="col">Designation</td>
                            <td scope="col">Reporting Line</td>
                            <td scope="col">Employee Type</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="content">
                            <th scope="row">Devlopment Team</th>
                            <td scope="row">Sr.Software Engineer</td>
                            <td>Deva subramani</td>
                            <td>Developer</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="present">
                      <div>
                        <table class="table table-borderless">
                          <thead>
                            <tr className="t1">
                              <td scope="col">Present Days</td>
                              <td scope="col">Absent Days</td>
                              <td scope="col">Salary/Days</td>
                              <td scope="col">Salary/Month</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="content">
                              <td>20</td>
                              <td>10</td>
                              <td>1000</td>
                              <td>25,600</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <Button className=" create-back btn-color">
                        Generate
                      </Button>
                    </div>
                  </div>
                  <hr />
                  {/* third details */}
                  <div className="last-section">
                    <div className="dept">
                      <table class="table table-borderless">
                        <thead>
                          <tr className="t1">
                            <td scope="col">Staff Id</td>
                            <td scope="col">Staff Name</td>
                            <td scope="col">Email Id</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="content">
                            <th scope="row">SS0003</th>
                            <td scope="row">Deva Subramani</td>
                            <td>deva.subramani@selromsoft.com</td>
                          </tr>
                        </tbody>
                      </table>
                      <table class="table table-borderless">
                        <thead>
                          <tr className="t1">
                            <td scope="col">Department</td>
                            <td scope="col">Designation</td>
                            <td scope="col">Reporting Line</td>
                            <td scope="col">Employee Type</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="content">
                            <th scope="row">Devlopment Team</th>
                            <td scope="row">Sr.Software Engineer</td>
                            <td>Selva Kumar</td>
                            <td>Team Lead</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="present">
                      <div>
                        <table class="table table-borderless">
                          <thead>
                            <tr className="t1">
                              <td scope="col">Present Days</td>
                              <td scope="col">Absent Days</td>
                              <td scope="col">Salary/Days</td>
                              <td scope="col">Salary/Month</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="content">
                              <td>20</td>
                              <td>5</td>
                              <td>5000</td>
                              <td>55,600</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <Button className=" create-back btn-color">
                        Generate
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* second staff pay  details */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default StaffPayrol;
