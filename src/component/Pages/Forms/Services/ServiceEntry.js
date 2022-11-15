import React, {Fragment, Component } from "react";

// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';


// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";
import Country from "../../../../shared/Reusable/CountryState";
import PhoneInput from "../../../../shared/Reusable/PhoneInput";


const Category = [
  { value: "Company", label: "Company" },
  { value: "Freelancer", label: "Freelancer" },
];

const Installation = [
  { value: "Installation 1", label: "Installation 1" },
  { value: "Installation 2", label: "Installation 2" },
  { value: "Installation 3", label: "Installation 3" },
];

const Status = [
  { value: "Active", label: "Active" },
  { value: "Completed", label: "Completed" },
];

const Priority = [
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
  { value: "Low", label: "Low" },
];
class ServiceEntry extends Component {
  initialState = {
    customerId: "",
    companyName: "",
    city: "",
    software: "",
    details: "",
    date: "",
    remarks: "",
    dates: ""
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

      if (this.state.customerId === "" || this.state.companyName === "" || this.state.city === "" || this.state.software === "") {

      toast.error("Please, Filled all mandatory fields !");
    } else {
      toast.success("Form Submitted!");
    }

    this.handleReset();
  };

  validate = () => {
    let name = this.state.customerId;
    let errors = {};
    let isValid = true;

    if (!this.state.customerId) {
      isValid = false;
      errors["name"] = "Enter Valid Value";
    }
    return isValid;
  };
  handleReset = () => {
    this.setState(() => this.initialState);
  };

  handleSourceChange = (newValue) => {
    this.setState({
      sourceOption: newValue
    })
  }

  handleSoftwareChange = (e) => {
    this.setState({
      ...this.state,
      softwareOption: e.target.value
    })
    console.log("Value::", this.state.softwareOption)
  }

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
              <div className="title"> Service Entry </div>
            </div>
            <div className="form__wrapper">
              <div className="form__left">
                <div className="fields">
                  <Input
                    type="date"
                    label="Date"
                    name="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                    style={{
                      marginLeft: "-70px"
                      , width: "100%"
                    }}

                  />
                </div>
                <div className="field__row">
                  <div className="fields">
                    <Input
                      type="text"
                      label="Cust Id"
                      name="customerId"
                      value={this.state.customerId}
                      onChange={this.handleChange}
                      isError
                    />
                  </div>
                  <div className="fields">
                    <Input
                      type="text"
                      label="Company"
                      name="companyName"
                      value={this.state.companyName}
                      onChange={this.handleChange}

                      isError
                    />
                  </div>
                </div>

                <div className="field__row">
                  <div className="fields">
                    <div className="input-fields">
                      <label htmlFor="" className="label">
                        Phone
                      </label>
                      <PhoneInput
                        style={{
                          marginLeft: "-45px",
                        }}
                        value={this.state.phone}
                        name="phone"
                        className="form-control"
                        international
                        defaultCountry="IN"
                        onChange={this.handleChange}

                      />
                    </div>
                  </div>
                  <div className="fields">
                    <Input
                      type="text"
                      label="City"
                      name="city"
                      value={this.state.city}
                      onChange={this.handleChange}
                      isError
                    />
                  </div>
                </div>

                <div className="fields">
                  <Select
                    label="Install"
                    placeholder="Select Installation No."
                    options={Installation}
                    defaultValue={Installation[0]}
                    className="select-control bill-select department-select"
                    isError
                  />
                </div>
                <div className="fields">
                  <Input
                    type="text"
                    label="Software"
                    style={{
                      marginLeft: "-70px",
                      width: "100%",
                    }}
                    name="software"
                    value={this.state.software}
                    onChange={this.handleChange}

                    isError
                  />
                </div>

                <div className="fields">
                  <Select
                    label="Category"
                    placeholder="Select Category No."
                    options={Category}
                    defaultValue={Category[0]}
                    className="select-control bill-select department-select"
                    isError
                  />
                </div>
              </div>
              {/* Left Side End */}
              {/* Right Side Start */}
              <div className="form__right">
                <div className="fields">
                  <TextArea
                    type="text"
                    label="Details"
                    rows="2"
                    name="details"
                    value={this.state.details}
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
                  />
                </div>
                <div className="fields">
                  <Select
                    label="Priority"
                    options={Priority}
                    className="select-control source-select"
                    defaultValue={Priority[0]}
                  />
                </div>
                <div className="fields">
                  <Input
                    type="date"
                    label="Date"
                    name="dates"
                    value={this.state.dates}
                    onChange={this.handleChange}

                    style={{
                      marginLeft: "12px"
                      , width: "100%"
                    }}

                  />
                </div>
                <div className="fields">
                  <TextArea
                    label="Remarks"
                    style={{ marginLeft: "15px" }}
                    name="remarks"
                    value={this.state.remarks}
                    onChange={this.handleChange}
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
              <input type="reset" value="Clear"
                className="btn btn-secondary"
              />

            </div>
          </form>
        </div>
        <ToastContainer />
        <Footer />
      </>
    );
  };
};
export default ServiceEntry;