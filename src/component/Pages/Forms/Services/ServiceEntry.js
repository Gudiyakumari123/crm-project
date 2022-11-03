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
const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

const swirl = cssTransition({
  enter: "swirl-in-fwd",
  exit: "swirl-out-bck",
});

const Category = [
  { value: "Service", label: "Service" },
  { value: "Updation", label: "Updation" },
];
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

const ReInstall = ({ initialValue}) => {
  const [phone, setPhone] = useState(initialValue);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [paid, setPaid] = useState({});

   // Form Validations
   const [formValues, setFormValues] = useState({
    date: "",
    customerId: "",
    companyName: "",
    phone: "",
    city: "",
    install: "",
    software: "",
    category: "",
    details: "",
    status: "",
    priority: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert("Everything is Good. Form Submitted");
    } else {
      // alert("Please , Fill the all required Fields");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.customerId) {
      errors.customerId = "Enter customerId";
    }
    if (!values.companyName) {
      errors.companyName = "Enter companyName";
    }
    if (!values.city) {
      errors.city = "Enter city";
    }
    if (!values.software) {
      errors.software = "Enter software";
    }
    return errors;
  };

  console.log("FormValues::", formValues);

  function animateCss() {
    toast.dark("Hey 👋, Data Has Been Saved!", {
      transition: bounce,
    });
  }

  function refreshPage() {
    window.location.reload(false);
  }

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
              <div className="fields">
                <DatePicker
                  label="Date"
                  // className="date-picker"
                  style={{ marginLeft: "-68px" }}

                />
              </div>

              <div className="field__row">
                <div className="fields">
                  <Input type="text"
                    label="Cust Id"
                  />
                </div>
                <div className="fields">
                  <Input type="text"
                    label="Company" />
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
                        marginLeft: "8px",
                        width: "208px"
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
                  <Input
                    type="text"
                    label="City"
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
                />
              </div>
              <div className="fields">
                <Input
                  type="text"
                  label="Staff Name"
                  style={{
                    marginLeft: "-70px",
                    width: "100%",
                  }}
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

            </div>
            {/* Left Side End */}
            {/* Right Side Start */}
            <div className="form__right">
              <div className="fields">
                <TextArea
                  type="text"
                  label="Details"
                  rows="2"

                  style={{
                    // width: "100%",
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
                <Select
                  label="Priority"
                  options={Priority}
                  className="select-control source-select"
                  defaultValue={Priority[0]}
                  onChange={setPaid}
                />
              </div>
              <div className="fields">
                <DatePicker
                  label="Date"
                  className="date-picker"
                  style={{ marginLeft: "15px" }} 
                  
                // isError
                />
              </div>
              <div className="fields">
                <TextArea label="Remarks"
                  style={{ marginLeft: "15px" }} 
                  />
              </div>
            </div>
          </div>
          <div className="btn__holder">
            <Button
              type="isSubmit"
              className="btn btn-primary"
              // onClick={handleSubmit}
              id="animate.css"
              value="isSubmit"
            >
              Save
            </Button>
            <Button className="btn btn-secondary">Clear</Button>
          </div>
        </div>
      </div>
      <Footer />
      {/* Source Modal*/}
    </>
  );
};
export default ReInstall;
