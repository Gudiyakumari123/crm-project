import React, { useState, useEffect, Fragment } from "react";

// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Button } from "react-bootstrap";
import { ToastContainer, toast, cssTransition } from "react-toastify";

// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";

// Phone Number
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { render } from "@testing-library/react";


const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

const swirl = cssTransition({
  enter: "swirl-in-fwd",
  exit: "swirl-out-bck",
});


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

const CustomerReceipt = () => {
  const [phone, setPhone] = useState("");

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const initialValues = {
    version:"",
    customerId:"",
    companyName:"",
    mobileNumber:"",
    city:"",
    amount:"",
    discountPer:"",
    discountAmt:"",
    grossAmt:"",
    gst:"",
    totalTaxAmount:"",
    roundAmt:"",
    netAmt:"",
    paidAmt:"",
    details:"",
    date:"",
    remarks:"",
    dates:""
  };
  const [paid, setPaid] = useState({});

  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setPhone();
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // animateCss();  

  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert("Everything is Good. Form Submitted");
    } else {
      alert("Please , Fill the all required Fields");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.customerId) {
      errors.customerId = "Enter customerId ";
    }
    if (!values.companyName) {
      errors.companyName = "Enter company Name";
    }
    if (!values.paidAmt) {
      errors.paidAmt = "Enter paid Amt";
    }
    
    return errors;
  };
  const animateCss = () => {
    toast("Form Submitted!");
  }

  
  const clearForm = () => {
    setFormValues(initialValues);
  };

  return (
    <>
      <Header />
      <SubHeader />
      <div className="form__container">
        <div className="form__content">
          <div className="title-display">
            <div className="title"> Customer Receipt </div>
          </div>
          <div className="form__wrapper">
            <div className="form__left">
              <div className="fields">
                <Input
                  type="text"
                  label="CustomerId"
                  style={{
                    marginLeft: "-70px",
                    width: "100%",
                  }}
                  name="customerId"
                  value={formValues.customerId}
                  onChange={handleChange}
                  isError
                  errorMsg={formErrors.customerId}
                />
              </div>
              <p className="show-errors-left"> {formErrors.customerId}</p>


              <div className="fields">
                <Input
                  type="text"
                  label="Company Name"
                  style={{
                    marginLeft: "-70px",
                    width: "100%",
                  }}
                  name="companyName"
                  value={formValues.companyName}
                  onChange={handleChange}
                  isError
                  errorMsg={formErrors.companyName}
                />
              </div>
              <p className="show-errors-left"> {formErrors.companyName}</p>


              <div className="fields">
                <div className="input-fields">
                  <label htmlFor="" className="label">
                    Phone

                  </label>
                  <PhoneInput
                    style={{
                      marginLeft: "-70px",
                    }}
                    value={phone}
                    name="mobileNumber"
                    className="form-control"
                    international
                    defaultCountry="IN"
                    onChange={setPhone}
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
                  isError
                />
              </div>

              <div className="fields">
                <Input
                  type="text"
                  label="PaidAmt"
                  name="paidAmt"
                  value={formValues.paidAmt}
                  onChange={handleChange}
                  isError
                  errorMsg={formErrors.paidAmt}
                />
              </div>
              <p className="show-errors"> {formErrors.paidAmt}</p>

              <div className="fields">
                <TextArea
                  type="text"
                  label="Remarks"
                  rows="2"
                  name="remarks"
                  value={formValues.remarks}
                  onChange={handleChange}
                  style={{
                    marginLeft: "13px"
                  }}
                />
              </div>

            </div>
          </div>
          <div className="btn__holder">
            <Button
              type="submit"
              className="btn btn-primary"
                  // onClick={animateCss}
              onClick={handleSubmit}
            >Save
            </Button>
            <Button className="btn btn-secondary"
              onClick={clearForm}
            >Clear</Button>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
      {/* Source Modal*/}
    </>
  );
};
export default CustomerReceipt;
