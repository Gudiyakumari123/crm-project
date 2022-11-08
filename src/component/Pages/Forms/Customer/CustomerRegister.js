import React, { useState, useEffect, Fragment } from "react";

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

const CustomerRegister = () => {

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [phone, setPhone] = useState("");

  const initialValues = {
    companyName:"",
    contactPerson:"",
    address:"",
    city:"",
    gstNo:"",
    email:"",
    remarksCustomer:"",
    remarksUser:""

  }
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
  };

  useEffect(() => {
    // console.log("FormErros::", formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      success();
    } else {
      Error();
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.companyName) {
      errors.companyName = "Enter Company Name";
    }
    if (!values.contactPerson) {
      errors.contactPerson = "Enter contactPerson";
    }
    if (!values.city) {
      errors.city = "Enter city";
    }
    if (!values.gstNo) {
      errors.gstNo = "Enter Gst No";
    }
    return errors;
  };

  const success = () => {
    toast.success("Form Submitted!");
  }
  const Error = () => {
    toast.error("Please, Filled all mandatory fields !");
  }

  const clearForm = () => {
    setFormValues(initialValues);
  }

  return (
    <>
      <Header />
      <SubHeader />
      <div className="form__container">
        <div className="form__content">
          <div className="title-display">
            <div className="title"> Customer Registration  </div>
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
                  value={formValues.companyName}
                  onChange={handleChange}
                  isError
                  errorMsg={formErrors.companyName}
                />
              </div>
              <p className="show-errors-left"> {formErrors.companyName}</p>


              <div className="fields">
                <Input
                  type="text"
                  label="ContPerson"
                  style={{
                    marginLeft: "-70px",
                    width: "100%",
                  }}
                  name="contactPerson"
                  value={formValues.contactPerson}
                  onChange={handleChange}
                  isError
                  errorMsg={formErrors.contactPerson}
                />
              </div>
              <p className="show-errors-left"> {formErrors.contactPerson}</p>

              <PhoneAlt />
              <div className="fields">
                <Select
                  label="Category"
                  placeholder="Select Category No."
                  options={Category}
                  defaultValue={Category[0]}
                  className="select-control bill-select department-select"
                  isError
                  errorMsg={formErrors.companyName}

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
                  value={formValues.address}
                  onChange={handleChange}
                  isError
                  errorMsg={formErrors.address}
                />
              </div>
              <CountryState className="designation-select" />
              <div className="fields">
                <Input
                  type="text"
                  label="Area/City"
                  name="city"
                  value={formValues.city}
                  onChange={handleChange}
                  isError
                  errorMsg={formErrors.city}
                  style={{
                    marginLeft: "-70px",
                    width: "100%",
                  }}
                />
              </div>
              <p className="show-errors-left"> {formErrors.city}</p>

            </div>
            {/* Left Side End */}
            {/* Right Side Start */}
            <div className="form__right">
              <div className="fields">
                <Input
                  type="text"
                  label="Gst No"
                  name="gstNo"
                  value={formValues.gstNo}
                  onChange={handleChange}
                  isError
                  errorMsg={formErrors.gstNo}

                />
              </div>
              <p className="show-errors"> {formErrors.gstNo}</p>


              <div className="fields">
                <Input
                  type="email"
                  label="Email"
                  // rows="2"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  style={{
                    // marginLeft: "13px"
                  }}
                />
              </div>


              <div className="fields">
                <TextArea
                  type="text"
                  label="Remarks"
                  rows="2"
                  name="remarksCustomer"
                  placeholder="Remarks by Customer"
                  value={formValues.remarksCustomer}
                  onChange={handleChange}
                  style={{
                    marginLeft: "13px"
                  }}
                />
              </div>

              <div className="fields">
                <Select
                  label="Status"
                  options={Status}
                  className="select-control source-select"
                  defaultValue={Status[0]}
                  onChange={setPaid}
                />
              </div>

              <div className="fields">
                <TextArea
                  type="text"
                  label="Remarks"
                  rows="3"
                  name="remarksUser"
                  placeholder="Remarks by User"
                  value={formValues.remarksUser}
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
export default CustomerRegister;
