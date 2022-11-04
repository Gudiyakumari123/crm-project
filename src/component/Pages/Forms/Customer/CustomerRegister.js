import React, { useState, useEffect, Fragment } from "react";

// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Button } from "react-bootstrap";
import DatePicker from "../../../../shared/Reusable/DatePicker";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import { useFormik } from "formik";

// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";
import PhoneAlt from "../../../../shared/Reusable/Phone&Alt";

// Phone Number
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import CountryState from "../../../../shared/Reusable/CountryState";
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


const Status = [
  { value: "Active", label: "Active" },
  { value: "Completed", label: "Completed" },
];

const CustomerRegister = ({ initialValue }) => {
  const [phone, setPhone] = useState(initialValue);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [paid, setPaid] = useState({});

  // Form Validations
  const [formValues, setFormValues] = useState({
    companyName: "",
    contactPerson: "",
    category: "",
    address: "",
    city: "",
    gstNo: "",
    phone: "",
    altPhone: "",
    email: "",
    remarksCustomer: "",
    remarksUser: "",
  });

  const addressFromik = useFormik({
    initialValues: {
      country: "India",
      state: null,
      city: null,
    },
    onSubmit: (values) => console.log(JSON.stringify(values)),
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
    // console.log("FormErros::", formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert("Everything is Good. Form Submitted");
    } else {
      // alert("Please , Fill the all required Fields");
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
    if (!values.category) {
      errors.category = "Enter category";
    }
    if (!values.city) {
      errors.city = "Enter city";
    }
    return errors;
  };

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
              <PhoneAlt />

              <div className="fields">
                <Input
                  type="text"
                  label="Category"
                  style={{
                    marginLeft: "-70px",
                    width: "100%",
                  }}
                  name="category"
                  value={formValues.category}
                  onChange={handleChange}
                  isError
                  errorMsg={formErrors.category}
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
              onClick={refreshPage}
            >Clear</Button>
          </div>
        </div>
      </div>
      <ToastContainer transition={bounce} />
      <Footer />
      {/* Source Modal*/}
    </>
  );
};
export default CustomerRegister;
