
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
  constructor(props) {
    super(props);

    this.initialValues = {
      companyName: "",
      contactPerson: "",
      address: "",
      city: "",
      gstNo: "",
      email: "",
      remarksCustomer: "",
      remarksUser: "",
    };
  }
  state = this.initialValues;

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validate = (values) => {
    const errors = {};
    if (!values.companyName) {
      errors.companyName = "company name is Required";
    }
    if (!values.contactPerson) {
      errors.contactPerson = "contactPerson  is Required";
    }
    if (!values.city) {
      errors.city = "city  is Required";
    }
    if (!values.gstNo) {
      errors.gstNo = "gstNo  is Required";
    }
    return errors;

  };
  handleSubmit = (values, setSubmitting) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      toast.success("Form submitted");
      
      // toast.error("Please, Filled all mandatory fields !");
      setSubmitting(false);
    }, 400);
  };
  render() {
    return (
      <>
        <Header />
        <SubHeader />
        <div>
          <div className="form__container">
            <Formik
              initialValues={this.initialValues}
              validate={(values) => this.validate(values)}
              onSubmit={(values, { setSubmitting }) =>
                this.handleSubmit(values, setSubmitting)
              }
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
                /* and other goodies */
              }) => (
                <form
                  // onReset={this.handleReset}
                  onSubmit={handleSubmit}
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
                          // style={{
                          //   marginLeft: "-70px",
                          //   width: "100%",
                          // }}
                          className="form-control marginleft_70"
                          id="companyName"
                          name="companyName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.companyName}
                          isError
                          errorMsg={errors.companyName}
                        />
                        <span className="error-msg">{errors.companyName && touched.companyName && errors.companyName}</span>

                      </div>
                      <div className="fields">
                        <Input
                          type="text"
                          label="ContPerson"
                          // style={{
                          //   marginLeft: "-70px",
                          //   width: "100%",
                          // }}
                          className="form-control marginleft_70"
                          name="contactPerson"
                          id="contactPerson"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.contactPerson}
                          isError
                          errorMsg={errors.contactPerson}

                        />
                        <span className="error-msg">{errors.contactPerson && touched.contactPerson && errors.contactPerson}</span>
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
                          // style={{
                          //   marginLeft: "-70px",
                          //   width: "100%",
                          // }}
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
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.city}
                          isError
                          // style={{
                          //   marginLeft: "-70px",
                          //   width: "100%",
                          // }}
                          className="form-control marginleft_70"
                          errorMsg={errors.city}
                        />
                        <span className="error-msg">{errors.city && touched.city && errors.city}</span>

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
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.gstNo}
                          isError
                          errorMsg={errors.gstNo}
                        />
                        <span className="error-msg">{errors.gstNo && touched.gstNo && errors.gstNo}</span>

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
                      onClick={isSubmitting}
                    >
                      Save
                    </Button>

                    <input type="reset" value="Clear" className="btn btn-secondary" />

                    {/* <input type="submit" onClick={isSubmitting} value="Submit" /> */}
                  </div>
                </form>
              )}
            </Formik>
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
