import React, { Component, Fragment } from "react";

// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Button } from "react-bootstrap";
import DatePicker from "../../../../shared/Reusable/DatePicker";
import { ToastContainer, toast, cssTransition } from "react-toastify";

// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";
// Phone Number
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import CountryState from "../../../../shared/Reusable/CountryState";
import { render } from "@testing-library/react";

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

const Category = [
  { value: "Company", label: "Company" },
  { value: "Freelancer", label: "Freelancer" },
];

const swirl = cssTransition({
  enter: "swirl-in-fwd",
  exit: "swirl-out-bck",
});

class DealerRegister extends Component {
  initialState = {
    dates: "",
    companyName: "",
    contactPerson: "",
    nature: "",
    altContact: "",
    city: "",
    email: "",
    remarksDealer: "",
    address: "",
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

    if (this.state.companyName === "" || this.state.contactPerson === "" || this.state.nature === "" || this.state.city === "" || this.state.email === "") {
      toast.error("Please, Filled all mandatory fields !");
    } else {
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
              <div className="title"> Dealer Registration </div>
            </div>
            <div className="form__wrapper">
              <div className="form__left">
                <div className="fields">
                  <Input
                    type="date"
                    label="Date"
                    name="dates"
                    value={this.state.dates}
                    onChange={this.handleChange}
                    style={{ marginLeft: "-70px", width: "100%" }}
                  />
                </div>

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
                <div className="fields">
                  <Input
                    type="text"
                    label="Nature"
                    style={{
                      marginLeft: "-70px",
                      width: "100%",
                    }}
                    name="nature"
                    value={this.state.nature}
                    onChange={this.handleChange}
                    isError
                  />
                </div>
                <CountryState />
                <div className="field__row">
                  <div className="fields">
                    <div className="input-fields">
                      <label htmlFor="" className="label">
                        Phone
                      </label>
                      <PhoneInput
                        style={{
                          marginLeft: "35px",
                        }}
                        value={this.state.phone}
                        name="phone"
                        className="form-control"
                        international
                        defaultCountry="IN"
                      />
                    </div>
                  </div>
                  <div className="fields">
                    <Input
                      type="text"
                      label="AltCont"
                      name="altContact"
                      value={this.state.altContact}
                      onChange={this.handleChange}
                      isError
                    />
                  </div>
                </div>
              </div>
              {/* Left Side End */}

              {/* Right Side Start */}
              <div className="form__right">
                <div className="fields">
                  <Input
                    type="text"
                    label="Area/City"
                    name="city"
                    value={this.state.city}
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
                    isError
                  />
                </div>

                <div className="fields">
                  <TextArea
                    type="text"
                    label="Remarks"
                    rows="2"
                    name="remarksDealer"
                    placeholder="Remarks by Dealer"
                    value={this.state.remarksDealer}
                    onChange={this.handleChange}
                    style={{
                      marginLeft: "13px",
                    }}
                  />
                </div>
                <div className="fields">
                  <TextArea
                    type="text"
                    label="Address"
                    style={{
                      marginLeft: "10px",
                      width: "100%",
                    }}
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                    isError
                  />
                </div>

                <div className="fields">
                  <TextArea
                    type="text"
                    label="Remarks"
                    rows="2"
                    name="remarksUser"
                    placeholder="Remarks by remarksUser"
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
        <ToastContainer transition={bounce} />
        <Footer />
        {/* Source Modal*/}
      </>
    );
  };
};
export default DealerRegister;
