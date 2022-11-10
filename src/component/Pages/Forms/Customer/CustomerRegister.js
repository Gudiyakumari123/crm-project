import React, { Component, Fragment } from "react";

// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";
import PhoneAlt from "../../../../shared/Reusable/Phone&Alt";

import CountryState from "../../../../shared/Reusable/CountryState";

const Category = [
  { value: "Company", label: "Company" },
  { value: "Freelancer", label: "Freelancer" },
];

const Status = [
  { value: "Active", label: "Active" },
  { value: "Completed", label: "Completed" },
];
class CustomerRegister extends Component {
  initialState = {
    companyName: "",
    contactPerson: "",
    address: "",
    city: "",
    gstNo: "",
    email: "",
    remarksCustomer: "",
    remarksUser: "",
  };
  state = this.initialState;
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.validate();

    if (this.state.companyName === "" || this.state.city === "" || this.state.gstNo === "") {
      toast.error("Please, Fill all mandatory fields !");
    }
    else if(this.state.contactPerson === "" )
    {
      toast.error("Please, Fill contact person name !");

    }
    else {
      toast.success("Form Submitted!");
    }

    this.handleReset();
  };

  validate = () => {
    let name = this.state.companyName;
    let errors = {};
    let isValid = true;

    if (!this.state.companyName) {
      isValid = false;
      errors["name"] = "Enter Valid Value";
    }
    return isValid;
  };
  handleReset = () => {
    this.setState(() => this.initialState);
  };

  render() {

    return (
      <>
        <Header />
        <SubHeader />
        <div className="form__container">
          <form
            onReset={this.handleReset}
            className="form__content">
            <div className="title-display">
              <div className="title"> Customer Registration </div>
            </div>
            <div className="form__wrapper">
              <div className="form__left">
                <div className="fields">
                  <Input
                    type="text"
                    label="Company"
                    style={{
                      marginLeft: "-70px",
                      width: "100%",
                    }}
                    name="companyName"
                    value={this.state.companyName}
                    onChange={this.handleChange}
                    isError
                  />
                </div>
                <div className="fields">
                  <Input
                    type="text"
                    label="ContPerson"
                    style={{
                      marginLeft: "-70px",
                      width: "100%",
                    }}
                    name="contactPerson"
                    value={this.state.contactPerson}
                    onChange={this.handleChange}
                    isError
                  />
                </div>
                <PhoneAlt />
                <div className="fields">
                  <Select
                    label="Category"
                    placeholder="Select Category No."
                    options={Category}
                    defaultValue={Category[0]}
                    className="select-control bill-select department-select"
                  />
                </div>
                <div className="fields">
                  <TextArea
                    type="text"
                    label="Address"
                    style={{
                      marginLeft: "-70px",
                      width: "100%",
                    }}
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                    isError
                  />
                </div>
                <CountryState className="designation-select" />
                <div className="fields">
                  <Input
                    type="text"
                    label="Area/City"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                    isError
                    style={{
                      marginLeft: "-70px",
                      width: "100%",
                    }}
                  />
                </div>
              </div>
              {/* Left Side End */}
              {/* Right Side Start */}
              <div className="form__right">
                <div className="fields">
                  <Input
                    type="text"
                    label="Gst No"
                    name="gstNo"
                    value={this.state.gstNo}
                    onChange={this.handleChange}
                    isError
                  />
                </div>

                <div className="fields">
                  <Input
                    type="email"
                    label="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="fields">
                  <TextArea
                    type="text"
                    label="Remarks"
                    rows="2"
                    name="remarksCustomer"
                    placeholder="Remarks by Customer"
                    value={this.state.remarksCustomer}
                    onChange={this.handleChange}
                    style={{
                      marginLeft: "13px",
                    }}
                  />
                </div>

                <div className="fields">
                  <Select
                    label="Status"
                    options={Status}
                    className="select-control source-select"
                    defaultValue={Status[0]}
                    onChange={this.setPaid}
                  />
                </div>

                <div className="fields">
                  <TextArea
                    type="text"
                    label="Remarks"
                    rows="3"
                    name="remarksUser"
                    placeholder="Remarks by User"
                    value={this.state.remarksUser}
                    onChange={this.handleChange}
                    style={{
                      marginLeft: "13px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="btn__holder">
              <Button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                Save
              </Button>

              <input type="reset" value="Clear" className="btn btn-secondary" />

            </div>
          </form>
        </div>
        <ToastContainer />
        <Footer />
      </>
    );
  };
};
export default CustomerRegister;
