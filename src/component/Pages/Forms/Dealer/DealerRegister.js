import React, { Fragment, Component } from "react";

// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import CountryState from "../../../../shared/Reusable/CountryState";
import { Formik } from "formik";
import PhoneAlt from "../../../../shared/Reusable/Phone&Alt";


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
class DealerRegister extends Component {
  // constructor(props) {
  //   super(props);

  //   this.initialValues = {
  //     dates: "",
  //     companyName: "",
  //     contactPerson: "",
  //     nature: "",
  //     altContact: "",
  //     city: "",
  //     email: "",
  //     remarksDealer: "",
  //     address: "",
  //     remarksUser: "",
  //   };
  // }

  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // validate = (values) => {
  //   const errors = {};

  //   if (!values.companyName) {
  //     errors.companyName = "Enter companyName";
  //   }

  //   if (!values.contactPerson) {
  //     errors.contactPerson = "Enter contactPerson";
  //   }
  //   if (!values.nature) {
  //     errors.nature = "Enter nature";
  //   }
  //   if (!values.city) {
  //     errors.city = "Enter city";
  //   }
  //   if (!values.email) {
  //     errors.email = "Enter email";
  //   }
  //   return errors;

  // };
  // handleSubmit = (values, setSubmitting) => {
  //   setTimeout(() => {
  //     // alert(JSON.stringify(values, null, 2));
  //     toast.success("Form submitted");
  //     setSubmitting(false);
  //   }, 400);
  // };
  // handleReset = () => {
  //   this.setState(() => this.initialState);
  // };
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

    if (this.state.customerId ==="" || this.state.contactPerson==="" || this.state.nature==="" || this.state.city===""|| this.state.email==="") {
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
                        className="form-control marginleft_70"
                      // value={this.state.dates}
                      // onChange={this.this.handleChange}
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
                        className="form-control marginleft_70"
                        name="companyName"
                        id="companyName"
                        onChange={this.handleChange}
                        value={this.state.companyName}
                        isError
                        errorMsg={this.state.companyName===""}
                      />

                    </div>

                    <div className="fields">
                      <Input
                        type="text"
                        label="ContPerson"
                        className="form-control marginleft_70"
                        name="contactPerson"
                        id="contactPerson"
                        onChange={this.handleChange}
                        value={this.state.contactPerson}
                        isError
                        errorMsg={this.state.contactPerson===""}
                      />

                    </div>
                    <div className="fields">
                      <Input
                        type="text"
                        label="Nature"
                        className="form-control marginleft_70"

                        name="nature"
                        id="nature"
                        onChange={this.handleChange}
                        value={this.state.nature}
                        isError
                        errorMsg={this.state.nature===""}
                      />


                    </div>
                    <CountryState />
                    <PhoneAlt />
                  </div>
                  {/* Left Side End */}

                  {/* Right Side Start */}
                  <div className="form__right">
                    <div className="fields">
                      <Input
                        type="text"
                        label="Area/City"
                        name="city"
                        id="city"
                        onChange={this.handleChange}
                        value={this.state.city}
                        isError
                        errorMsg={this.state.city===""}
                      />

                    </div>

                    <div className="fields">
                      <Input
                        type="email"
                        label="Email"
                        name="email"
                        id="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        isError
                        errorMsg={this.state.email===""}
                      />
                    </div>

                    <div className="fields">
                      <TextArea
                        type="text"
                        label="Remarks"
                        rows="2"
                        name="remarksDealer"
                        placeholder="Remarks by Dealer"
                        // value={this.state.remarksDealer}
                        // onChange={this.this.handleChange}
                        className="form-control right_13"

                      />
                    </div>
                    <div className="fields">
                      <TextArea
                        type="text"
                        label="Address"
                        name="address"
                        className="form-control right_13"

                        // value={this.state.address}
                        // onChange={this.this.handleChange}
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
                        // value={this.state.remarksUser}
                        // onChange={this.this.handleChange}

                        className="form-control right_13"
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
export default DealerRegister;