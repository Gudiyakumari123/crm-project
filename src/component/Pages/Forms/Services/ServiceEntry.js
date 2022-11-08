import React, { useState, useEffect, Fragment } from "react";

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

const Priority = [
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
  { value: "Low", label: "Low" },
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

const ReInstall = () => {
  // const [phone, setPhone] = useState(initialValue);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [phone, setPhone] = useState({});

  const initialValues = {
    customerId:"",
    companyName: "",
    city:"",
    software:"",
    details:"",
    date:"",
    remarks:"",
    dates:""
  };
  const [paid, setPaid] = useState({});
// Form Validations
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
    setFormValues(initialValues);

  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      success();
      
    } else {
      Error();

    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // if (!values.phone) {
    //   errors.phone = "Enter phone";
    // }
    // else if (!values.phone < 9) {
    //   errors.phone = "Enter 10 digit ";

    // }
    if (!values.customerId) {
      errors.customerId = "Enter customerId";
    }
    if (!values.companyName) {
      errors.companyName = "Enter companyName";
    }
   
    if (!values.software) {
      errors.software = "Enter software";
    }
    if (!values.city) {
      errors.city = "Enter city";
    }
   
    return errors;
  };

  console.log("FormValues::", formValues);


  const success = () => {
    toast.success("Form Submitted!");
  }
  const Error = () => {
    toast.error("Please, Filled all mandatory fields !");
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
            <div className="title"> Service Entry </div>
          </div>
          <div className="form__wrapper">
            <div className="form__left">
              {/* <div className="fields">
                <DatePicker
                  label="Date"
                  // className="date-picker"
                  style={{ marginLeft: "-68px" }}
                />
              </div> */}
               <div className="fields">
                <Input
                  type="date"
                  label="Date"
                  name="date"
                  value={formValues.date}
                  onChange={handleChange}
                  style={{ marginLeft: "-70px"
                ,width:"100%"
                }}

                />
              </div>
              <div className="field__row">
                <div className="fields">
                  <Input
                    type="text"
                    label="Cust Id"
                    name="customerId"
                    value={formValues.customerId}
                    onChange={handleChange}
                    isError
                    errorMsg={formErrors.customerId}
                  />
                  <p className="show-errors-left"> {formErrors.customerId} </p>
                </div>
                <div className="fields">
                  <Input
                    type="text"
                    label="Company"
                    name="companyName"
                    value={formValues.companyName}
                    onChange={handleChange}
                    isError
                    errorMsg={formErrors.companyName}
                  />
                  <p className="show-errors-left"> {formErrors.companyName} </p>
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
                        marginLeft: "35px",
                      }}
                      value={formValues.phone}
                      name="phone"
                      className="form-control"
                      international
                      defaultCountry="IN"
                      // onChange={handleChange}
                    />
                  </div>
                  {/* <p className="show-errors-left"> {formErrors.phone}</p> */}
                </div>
                <div className="fields">
                  <Input
                    type="text"
                    label="City"
                    name="city"
                    value={formValues.city}
                    onChange={handleChange}
                    isError
                    errorMsg={formErrors.city}
                  />
                  <p className="show-errors-left"> {formErrors.city} </p>
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
                  value={formValues.software}
                  onChange={handleChange}
                  isError
                  errorMsg={formErrors.software}
                />
                <p className="show-errors-left"> {formErrors.software} </p>
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
                  value={formValues.details}
                  onChange={handleChange}
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
                  isError
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
                  value={formValues.dates}
                  onChange={handleChange}
                  style={{ marginLeft: "12px"
                ,width:"100%"
                }}

                />
              </div>
              <div className="fields">
                <TextArea
                  label="Remarks"
                  style={{ marginLeft: "15px" }}
                  name="remarks"
                  value={formValues.remarks}
                  onChange={handleChange}
                />
              </div>              
            </div>
          </div>
          <div className="btn__holder">
            <Button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button 
            className="btn btn-secondary" 
            onClick={clearForm}>
              Clear
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer transition={bounce} />
      <Footer />
      {/* Source Modal*/}
    </>
  );
};
export default ReInstall;
