import React, { Component } from "react";
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";
import Country from "../../../../shared/Reusable/CountryState";
import Nationality from "../../../../shared/Reusable/CountryOnly";
import Try from "../../../../shared/Reusable/tryPhone";

// Selectedddd
const Status = [
  { value: "Development Team", label: "Developer Team" },
  { value: "Sales & Support Team", label: "Sales & Support Team" },
  { value: "Customer Excellence Team", label: "Customer Excellence Team" },
];
const Designation = [
  { value: "Jr.Software Engineer", label: "Jr.Software Engineer" },
  { value: "Sr.Software Engineer", label: "Sr.Software Engineer" },
];
const ReportLine = [
  { value: "Deva Subramani", label: "Deva Subramani" },
  { value: "Dhanasekaran J", label: "Dhanasekaran J" },
  { value: "Amutha", label: "Amutha" },
  { value: "Selvakumar", label: "Selvakumar" },
  { value: "Ismail Faisal", label: "Ismail Faisal" },
  { value: "Melfer Elizaga", label: "Melfer Elizaga" },
];

const employeeType = [
  { value: "Executive", label: "Executive" },
  { value: "Employee", label: "Employee" },
  { value: "Consultant", label: "Consultant" },
];

const Gender = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Others", label: "Others" },
];
const maritalStatus = [
  { value: "Single", label: "Single" },
  { value: "Married", label: "Married" },
  { value: "Seperated", label: "Seperated" },
];
const BloodGroup = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
];

const Religion = [
  { value: "Hindu", label: "Hindu" },
  { value: "Muslim", label: "Muslim" },
  { value: "Others", label: "Others" },
];
const educationAttainment = [
  { value: "Primary", label: "Primary" },
  { value: "Secondary", label: "Secondary" },
  { value: "College", label: "College" },
  { value: "MBA", label: "MBA" },
  { value: "Dectrate", label: "Doctrate" },
];

class Staff extends Component {
  state = {
    newUser: { firstName: "", lastName: "" },
  };
  handleFirstName(e) {
    let value = e.target.value;
    this.setState((prevState) => ({
      newUser: {
        ...prevState.newUser,
        firstName: value,
      },
    }));
  }
  handleLastName(e) {
    let value = e.target.value;
    this.setState((prevState) => ({
      newUser: {
        ...prevState.newUser,
        lastName: value,
      },
    }));
  }

  getEmailId() {
    return (
      this.state.newUser.firstName.toLowerCase() +
      "." +
      this.state.newUser.lastName.toLowerCase() +
      "@selromsoft.com"
    );
  }
  render() {
    const date = new Date();
    const futureDate = date.getDate();
    date.setDate(futureDate);
    const defaultValue = date.toLocaleDateString("en-CA");
    return (
      <>
        <Header />
        <SubHeader />
        <div className="form__container">
          <div className="form__content">
            <div className="title-display">
              <div className="title"> Staff Entry </div>
            </div>
            <div className="form__wrapper">
              <div className="form__left">
                <div className="field__row">
                  <div className="fields">
                    <Input type="text" label="Entry No" readOnly="true" />
                  </div>
                  <div className="fields">
                    <Input
                      id="dateRequired"
                      type="date"
                      label="Date"
                      name="dateRequired"
                      defaultValue={defaultValue}
                    />
                  </div>
                </div>
                <div className="fields">
                  <Select
                    label="Department"
                    options={Status}
                    className="select-control bill-select department-select"
                  />
                </div>
                <div className="fields">
                  <Select
                    label="Designation"
                    options={Designation}
                    className="select-control designation-select"
                  />
                </div>
                <div className="fields">
                  <Select
                    label="Reporting Line"
                    options={ReportLine}
                    className="select-control report-select"
                  />
                </div>
                <div className="fields">
                  <Select
                    label="Employee Type"
                    options={employeeType}
                    className="select-control employee-select"
                  />
                </div>
                <div className="field__row">
                  <div className="fields">
                    <Input type="text" label="Staff Id" readOnly="true" />
                  </div>
                  <div className="fields">
                    <Input type="date" label="Date Of Join" />
                  </div>
                </div>
                <div className="fields">
                  <Input
                    type="text"
                    label="Staff Name"
                    style={{
                      marginLeft: "-70px",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="field__row">
                  <div className="fields">
                    <Input
                      type="text"
                      label="First Name"
                      onChange={this.handleFirstName.bind(this)}
                    />
                  </div>
                  <div className="fields">
                    <Input
                      type="text"
                      label="Last Name"
                      onChange={this.handleLastName.bind(this)}
                    />
                  </div>
                </div>
                <div className="fields">
                  <Input
                    type="text"
                    label="Father Name"
                    style={{
                      marginLeft: "-71px",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="field__row">
                  <div className="fields">
                    <Select
                      label="Gender"
                      options={Gender}
                      className="select-control gender-select"
                    />
                  </div>
                  <div className="fields">
                    <Select
                      label="Marital Status "
                      options={maritalStatus}
                      className="select-control marital-select"
                    />
                  </div>
                </div>
                <div className="field__row">
                  <div className="fields">
                    <Select
                      label="Blood Group "
                      options={BloodGroup}
                      className="select-control blood-select"
                    />
                  </div>
                  <div className="fields">
                    <Input type="date" label="Date Of Birth" />
                  </div>
                </div>
                <Nationality />
                <div className="fields">
                  <TextArea
                    type="text"
                    label="Address"
                    style={{ marginLeft: "-70px", marginButtom: "5px" }}
                  />
                </div>
                <div className="field__row">
                  <div className="fields">
                    <Input
                      type="text"
                      label="Area/City"
                      style={{ marginButtom: "5px" }}
                    />
                  </div>
                  <div className="fields">
                    <Input type="text" label="Pin Code" />
                  </div>
                </div>
                <Country />
                <Try />
              </div>
              <div className="form__right">
                <div className="fields">
                  <Input
                    type="text"
                    label="Email"
                    name="email"
                    value={this.getEmailId()}
                    readOnly={true}
                  />
                </div>
                <div className="fields">
                  <Input type="text" label="International Id" />
                </div>

                <div className="fields">
                  <Select
                    label="Educational Attainment"
                    options={educationAttainment}
                    className="select-control education-select"
                  />
                </div>
                <div className="fields">
                  <Input type="text" label="Experience Details" />
                </div>

                <div className="fields">
                  <Input type="text" label="Previous Job" />
                </div>
                <div className="fields">
                  <Input type="text" label="Language Known" />
                </div>
                <div className="fields">
                  <Input type="text" label="Bank Name" />
                </div>
                <div className="fields">
                  <Input type="text" label="Bank A/C No" />
                </div>
                <div className="fields">
                  <Input type="text" label="IFSC Code" />
                </div>
                <div className="fields">
                  <Input type="text" label="Salary/Day" />
                </div>
                <div className="fields">
                  <Input type="text" label="Remarks" />
                </div>
              </div>
            </div>
            <div className="btn__holder">
              <Button
                type="isSubmit"
                className="btn btn-primary"
                // onClick={handleSubmit}
                id="animate.css"
                value="isSubmit"
              >
                Save
              </Button>
              <Button className="btn btn-secondary">Clear</Button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default Staff;
