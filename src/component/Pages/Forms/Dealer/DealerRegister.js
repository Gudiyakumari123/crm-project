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

const DealerRegister = ({ initialValue }) => {
  // const [phone, setPhone] = useState(initialValue);

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
      // alert("Everything is Good. Form Submitted");
      animateCss();

    } else {
      // alert("Please , Fill the all required Fields");
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
    if (!values.companyName) {
      errors.companyName = "Enter companyName";
    }
    if (!values.contactPerson) {
      errors.contactPerson = "Enter contactPerson";
    }
    if (!values.nature) {
      errors.nature = "Enter nature";
    }
    if (!values.city) {
      errors.city = "Enter city";
    }
    if (!values.email) {
      errors.email = "Enter email";
    }
    return errors;
  };

  console.log("FormValues::", formValues);

  // function animateCss() {
  //   toast.dark("Hey 👋, Data Has Been Saved!", {
  //     transition: bounce,
  //   });
  // }

  const animateCss = () => {
    toast("Form Submitted!");
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
            <div className="title"> Dealer Registration  </div>
          </div>
          <div className="form__wrapper">
            <div className="form__left">
              <div className="fields">
                <DatePicker
                  label="Date"
                  style={{ marginLeft: "-68px" }}

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
                  // errorMsg={formErrors.companyName}

                />
              </div>
              {/* <p className="show-errors-left"> {formErrors.customerId}</p> */}


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


              <div className="fields">
                <Input
                  type="text"
                  label="Nature"
                  style={{
                    marginLeft: "-70px",
                    width: "100%",
                  }}
                  name="nature"
                  value={formValues.nature}
                  onChange={handleChange}
                  isError
                  errorMsg={formErrors.nature}
                />
              </div>
              <p className="show-errors-left"> {formErrors.nature}</p>


              <CountryState
              />
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
                    label="AltCont"
                    name="altContact"
                    value={formValues.altContact}
                    onChange={handleChange}
                    isError
                    errorMsg={formErrors.altContact}
                  />
                </div>
              </div>

            </div>
            {/* Left Side End */}
            {/* Right Side Start */}
            <div className="form__right">

              <div className="fields">
                <Input
                  type="text"
                  label="Area/City"
                  name="city"
                  value={formValues.city}
                  onChange={handleChange}
                  isError
                  errorMsg={formErrors.city}
                />
              </div>
              <p className="show-errors"> {formErrors.city}</p>



              <div className="fields">
                <Input
                  type="email"
                  label="Email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  isError
                  errorMsg={formErrors.email}
                />
                <p className="show-errors"> {formErrors.email}</p>

              </div>

              <div className="fields">
                <TextArea
                  type="text"
                  label="Remarks"
                  rows="2"
                  name="remarksDealer"
                  placeholder="Remarks by Dealer"
                  value={formValues.remarksDealer}
                  onChange={handleChange}
                  style={{
                    marginLeft: "13px"
                  }}
                />
              </div>
              <div className="fields">
                <TextArea
                  type="text"
                  label="Address"
                  style={{
                    marginLeft: "10px",
                    width: "100%",
                  }}
                  name="address"
                  value={formValues.address}
                  onChange={handleChange}
                  isError
                  errorMsg={formErrors.address}
                />
              </div>

              <div className="fields">
                <TextArea
                  type="text"
                  label="Remarks"
                  rows="2"
                  name="remarksUser"
                  placeholder="Remarks by remarksUser"
                  value={formValues.remarksDealer}
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
export default DealerRegister;
