
import React, { Fragment, Component } from "react";

// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Button } from "react-bootstrap";

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

const BillNo = [
  { value: "Bill No 1", label: "Bill No 1" },
  { value: "Bill No 2", label: "Bill No 2" },
  { value: "Bill No 3", label: "Bill No 3" },
];

const payMode = [
  { value: "Cash", label: "Cash" },
  { value: "Card", label: "Card" },
  { value: "UPI", label: "UPI" },
];

class CustomerReceipt extends React.Component {
  constructor(props) {
    super(props);

    this.initialValues = {
      customerId: "",
      companyName: "",
      mobileNumber: "",
      install: "",
      payMode: "",
      paidAmt: "",
      remarks: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validate = (values) => {
    const errors = {};
    if (!values.customerId) {
      errors.customerId = "Required";
    }
    if (!values.companyName) {
      errors.companyName = "Enter companyName";
    }

    return errors;

  };
  handleSubmit = (values, setSubmitting) => {
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
  };

  handleToast = (values) => {
    if (!values) {
      toast.error("Please, Filled all mandatory fields !");
    }
    else {
      toast.success("Please, Filled all mandatory fields !");
    }
  }

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
                    <div className="title"> Customer Receipt </div>
                  </div>
                  <div className="form__wrapper">
                    <div className="form__left">
                      <div className="fields">
                        <Input
                          label="Company ID"
                          type="text"
                          id="customerId"
                          name="customerId"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.customerId}
                        // isError
                        />
                        <span className="error-msg">{errors.customerId && touched.customerId && errors.customerId}</span>

                      </div>
                      <div className="fields">
                        <Input
                          type="text"
                          label="Company Name"
                          style={{
                            marginLeft: "-70px",
                            width: "100%",
                          }}
                          name="companyName"
                          // value={this.state.companyName}
                          onChange={this.handleChange}
                          isError
                        // errorMsg={this.validate}
                        />
                      </div>
                      <div className="fields">
                        <div className="input-fields">
                          <label htmlFor="" className="label">
                            Phone
                          </label>
                          <PhoneInput
                            style={{
                              marginLeft: "-70px",
                            }}
                            // value={phone}
                            name="mobileNumber"
                            className="form-control"
                            international
                            defaultCountry="IN"
                          // onChange={setPhone}
                          />
                        </div>
                      </div>
                      <div className="fields">
                        <Select
                          label="Install"
                          placeholder="Select Installation No."
                          options={BillNo}
                          defaultValue={BillNo[0]}
                          className="select-control bill-select department-select"
                        />
                      </div>
                    </div>
                    {/* Left Side End */}
                    {/* Right Side Start */}
                    <div className="form__right">
                      <div className="fields">
                        <Select
                          label="PayMode"
                          options={payMode}
                          className="select-control source-select"
                          defaultValue={payMode[0]}
                        />
                      </div>

                      <div className="fields">
                        <Input
                          type="text"
                          label="PaidAmt"
                          name="paidAmt"
                          // value={this.state.paidAmt}
                          onChange={this.handleChange}
                          isError
                        />
                      </div>
                      <div className="fields">
                        <TextArea
                          type="text"
                          label="Remarks"
                          rows="2"
                          name="remarks"
                          // value={this.state.remarks}
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
                      onClick={isSubmitting}
                    >
                      Save
                    </Button>
                    <input type="reset" value="Clear" className="btn btn-secondary" />
                    <input type="submit" value="Submit" onClick={isSubmitting} />
                  </div>
                </form>
              )}
            </Formik>
            {/* </div> */}
            {/* <Footer /> */}
          </div>
        </div>
      </>

    );
  }
}
export default CustomerReceipt;
