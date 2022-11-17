
import React, { Fragment, Component } from "react";

// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Button } from "react-bootstrap";
import CountryState from "../../../../shared/Reusable/CountryState";
import PhoneAlt from "../../../../shared/Reusable/Phone&Alt";

// import { Toast } from "primereact/toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// // Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";

// Phone Number
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { Formik } from "formik";


const Category = [
  { value: "Company", label: "Company" },
  { value: "Freelancer", label: "Freelancer" },
];

const Status = [
  { value: "Active", label: "Active" },
  { value: "Completed", label: "Completed" },
];

class CustomerReceipt extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.initialValues = {
  //     companyName: "",
  //     contactPerson: "",
  //     address: "",
  //     city: "",
  //     gstNo: "",
  //     email: "",
  //     remarksCustomer: "",
  //     remarksUser: "",
  //   };
  // }
  // state = this.initialValues;

  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // validate = (values) => {
  //   const this.state = {};
  //   if (!values.companyName) {
  //     this.state.companyName = "company name is Required";
  //   }
  //   if (!values.contactPerson) {
  //     this.state.contactPerson = "contactPerson  is Required";
  //   }
  //   if (!values.city) {
  //     this.state.city = "city  is Required";
  //   }
  //   if (!values.gstNo) {
  //     this.state.gstNo = "gstNo  is Required";
  //   }
  //   return this.state;

  // };
  // handleSubmit = (values, setSubmitting) => {
  //   setTimeout(() => {
  //     alert(JSON.stringify(values, null, 2));
  //     toast.success("Form submitted");
      
  //     // toast.error("Please, Filled all mandatory fields !");
  //     setSubmitting(false);
  //   }, 400);
  // };

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

    if (this.state.customerId ==="" || this.state.contactPerson==="" || this.state.city==="" || this.state.gstNo==="") {
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
      this.state["name"] = "Enter Valid Value";
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
        <div>
          <div className="form__container">
            
                <form
                  onReset={this.handleReset}
                  onSubmit={this.handleSubmit}
                  className="form__content"
                >
                  <div className="title-display">
                    <div className="title"> Customer Registration</div>
                  </div>
                  <div className="form__wrapper">
                    <div className="form__left">
                      <div className="fields">
                        <Input
                          type="text"
                          label="Company"
                          className="form-control marginleft_70"
                          id="companyName"
                          name="companyName"
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
                      <PhoneAlt />
                      <div className="fields">
                        <Select
                          label="Category"
                          placeholder="Select Category No."
                          options={Category}
                          defaultValue={Category[0]}
                          className="select-control department-select"
                        />
                      </div>
                      <div className="fields">
                        <TextArea
                          type="text"
                          label="Address"
                         
                          className="form-control marginleft_70"
                          name="address"
                          // value={this.state.address}
                          // onChange={this.handleChange}
                          isError
                        />
                      </div>
                      <CountryState className="designation-select" />
                      <div className="fields">
                        <Input
                          type="text"
                          label="Area/City"
                          name="city"
                          id="city"
                          onChange={this.handleChange}
                          value={this.state.city}
                          isError
                          className="form-control marginleft_70"
                          errorMsg={this.state.city===""}
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
                          id="gstNo"
                          onChange={this.handleChange}
                          value={this.state.gstNo}
                          isError
                          errorMsg={this.state.gstNo===""}
                        />

                      </div>

                      <div className="fields">
                        <Input
                          type="email"
                          label="Email"
                          name="email"
                        // value={this.state.email}
                        // onChange={this.handleChange}
                        />
                      </div>

                      <div className="fields">
                        <TextArea
                          type="text"
                          label="Remarks"
                          rows="2"
                          name="remarksCustomer"
                          placeholder="Remarks by Customer"
                          // value={this.state.remarksCustomer}
                          // onChange={this.handleChange}
                          // style={{
                          //   marginLeft: "13px",
                          // }}
                          className="form-control right_13"
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
                          // value={this.state.remarksUser}
                          // onChange={this.handleChange}
                          // style={{
                          //   marginLeft: "13px",
                          // }}
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

                    {/* <input type="submit" onClick={isSubmitting} value="Submit" /> */}
                  </div>
                </form>
            
            {/* </div> */}
        <ToastContainer />
            <Footer />
          </div>
        </div>
      </>

    );
  }
}
export default CustomerReceipt;
