import React from "react";
// import React from 'react';
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import "./staff.scss";
import { NavDropdown } from "react-bootstrap";

// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";
import { Component } from "react";
import Country from "./tryCountry";
import Nationality from "./nationality";
import Try from "./tryPhone";
import { Link } from "react-router-dom";
import Toggle from "./toggle";
function StaffList() {
  return (
    <>
      <Header />
      <SubHeader />
      <div className="form__container">
        <div className="form__content">
          <div className="title-display">
            <div className="title"> Staff Details </div>
            <Button className=" create-back">
              {" "}
              <Link to="/staff-details" className="dropdown-item">
                Create New Staff
              </Link>{" "}
            </Button>
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
                          <NavDropdown
                            title={<span>Action</span>}
                            id="collasible-nav-dropdown"
                          >
                            <Link to="/voucher-entry" className="dropdown-item">
                              <i className="bx bx-cabinet"></i> View
                            </Link>
                            <Link to="/voucher-entry" className="dropdown-item">
                              <i className="bx bx-cabinet"></i> Edit
                            </Link>
                          </NavDropdown>
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
                          <NavDropdown
                            title={<span>Action</span>}
                            id="collasible-nav-dropdown"
                          >
                            <Link to="/voucher-entry" className="dropdown-item">
                              <i className="bx bx-cabinet"></i> View
                            </Link>
                            <Link to="/voucher-entry" className="dropdown-item">
                              <i className="bx bx-cabinet"></i> Edit
                            </Link>
                          </NavDropdown>
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
                          <NavDropdown
                            title={<span>Action</span>}
                            id="collasible-nav-dropdown"
                          >
                            <Link to="/voucher-entry" className="dropdown-item">
                              <i className="bx bx-cabinet"></i> View
                            </Link>
                            <Link to="/voucher-entry" className="dropdown-item">
                              <i className="bx bx-cabinet"></i> Edit
                            </Link>
                          </NavDropdown>
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
    </>
  );
}
export default StaffList;
