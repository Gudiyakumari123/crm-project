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
import PhoneInput from "../../../../shared/Reusable/PhoneInput";

// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

import { render } from "@testing-library/react";

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

const Priority = [
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
  { value: "Low", label: "Low" },
];

const Status = [
  { value: "Active", label: "Active" },
  { value: "Completed", label: "Completed" },
];

const InstallEntry = () => {
  const [phone, setPhone] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const initialValues = {
    version: "",
    customerId: "",
    companyName: "",
    mobileNumber: "",
    city: "",
    amount: "",
    discountPer: "",
    discountAmt: "",
    grossAmt: "",
    gst: "",
    totalTaxAmount: "",
    roundAmt: "",
    netAmt: "",
    paidAmt: "",
    details: "",
    date: "",
    remarks: "",
    dates: "",
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

  const Category1 = ["WonderPOS", "Healthy Fly", "Edu Fly"];
  const Softwares = {
    WonderPOS: [
      "General Retail & Wholesale",
      "Pharmacy Retail & Wholesale",
      "Restaurant",
      "Hypermarket",
      "Supermarket",
      "Department Stores",
      "Kirana /Grocery Retail & Wholesale",
      "FMCC Distribution",
      "Jewellery Retail & Wholesale",
      "Hallmarking Centre Software",
      "Gas Agency",
      "Readymade Retail & Wholesale",
      "Textiles Retail & Wholesale",
      "Fruits & Vegetables",
      "Rice Traders / Mundy",
      "Fancy Store",
      "Footwear Shop",
      "Mobile Sales & Service",
      "Computer Sales & Service",
      "Electrical Shop",
      "Spa & Saloon",
      "Laundry / Dry Clean",
      "Books Shop",
      "Florists",
      "Home Decor & Furniture",
      "Optical Shop",
      "Stationery Shop",
      "Toys & Gift Shop",
      "Watches",
      "Home Appliances",
      "Surgical",
      "Chemists & Druggists",
      "Auto Parts",
      "Fertilizer & Agro Products",
      "Hardware Shop",
      "Sports & Fitness",
      "Tyre",
      "Vessel Shop",
      "Oil Shop",
      "Paints Shop",
      "Water Companies",
      "Pizza Shop",
      "Coffee Shop",
      "Bakery",
      "Sweet Shop",
      "Bar /Pubs",
      "Ice Cream Shop",
      "Juice Shop",
      "Tea Shop",
      "Food Court",
      "Auto Finance",
      "Jewellery Loan",
      "Crackers Shop",
    ],
    "Healthy Fly": [
      "Hospital",
      "Multi-Specialty Hospital",
      "Clinic / Homecare",
      "Ayurvedic Hospital",
    ],
    "Edu Fly": ["School", "College / University", "Study Centre / Institute"],
  };

  const [selectedState, setSelectedState] = useState("");
  console.log("SelectState::", selectedState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues, phone));
    setFormValues(initialValues);
    setIsSubmit(true);
    setPhone();
    setFormValues(initialValues);


  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // alert("Everything is Good. Form Submitted");
      success();

    } else {
      // alert("Please , Fill the all required Fields");
      Error();

    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.version) {
      errors.version = "Enter version";
    }
    if (!values.companyName) {
      errors.companyName = "Enter companyName";
    }
    if (!values.customerId) {
      errors.customerId = "Enter customerId";
    }
    if (!values.phone) {
      errors.phone = "Enter phone";
    }
    if (!values.city) {
      errors.city = "Enter city";
    }
    if (!values.amount) {
      errors.amount = "amount";
    }
    if (!values.grossAmt) {
      errors.grossAmt = "grossAmt";
    }
    if (!values.roundAmt) {
      errors.roundAmt = "roundAmt";
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
  }

  return (
    <>
      <Header />
      <SubHeader />
      <div className="form__container">
        <div className="form__content">
          <div className="title-display">
            <div className="title"> Installation Entry </div>
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
                  name="dates"
                  value={formValues.dates}
                  onChange={handleChange}
                  style={{ marginLeft: "-70px", width: "100%" }}
                />
              </div>
              <div className="fields">
                <div className="select">
                  <label htmlFor="" className="label">
                    Category
                  </label>
                  <select onChange={(e) => setSelectedState(e.target.value)}>
                    {Category1.map((values) => {
                      return <option>{values}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="fields">
                <div className="select">
                  <label htmlFor="" className="label">
                    Software
                  </label>
                  {selectedState && (
                    <select>
                      {Softwares[selectedState].map((values) => {
                        return <option>{values}</option>;
                      })}
                    </select>
                  )}
                </div>
              </div>

              <div className="fields">
                <Input
                  type="text"
                  label="Version"
                  name="version"
                  style={{ marginLeft: "-70px", width: "100%" }}
                  value={formValues.version}
                  onChange={handleChange}
                  isError
                  errorMsg={formErrors.version}
                />
              </div>
              <p className="show-errors-left"> {formErrors.version} </p>

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
                      <div className="require"> </div>
                    </label>
                    <PhoneInput
                      style={{
                        marginLeft: "8px",
                        width: "208px",
                      }}
                      value={phone}
                      name="mobileNumber"
                      className="form-control"
                      international
                      defaultCountry="IN"
                      onChange={setPhone}
                      maxLength={15}
                    />
                  </div>
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
                </div>
              </div>

              <div className="field__row__three">
                <div className="fields">
                  <Input
                    label="Total Amt"
                    name="amount"
                    value={formValues.amount}
                    onChange={handleChange}
                    isError
                    errorMsg={formErrors.amount}
                    className=" form-control three__row"
                  />
                </div>

                <div className="fields">
                  <Input
                    label="Dis%"
                    name="discountPer"
                    placeholder="%"
                    value={formValues.discountPer}
                    // onBlur={onBlurEvent}
                    onChange={handleChange}
                  />
                </div>
                <div className="fields">
                  <Input
                    label="DisAmt"
                    type="number"
                    name="discountAmt"
                    placeholder="Amt"
                    value={formValues.discountAmt}
                    // onBlur={onBlurEvent}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* 2nd */}

              <div className="field__row__three">
                <div className="fields">
                  <Input
                    label="grossAmt"
                    type="number"
                    name="grossAmt"
                    value={formValues.grossAmt}
                    onChange={handleChange}
                    isError
                    errorMsg={formErrors.grossAmt}
                    className=" form-control three__row"
                  />
                  <p className="show-errors-left"> {formErrors.grossAmt} </p>
                </div>
                <div className="fields">
                  <Input
                    label="GST% "
                    type="number"
                    name="gst"
                    className="form-control"
                    // onBlur={onBlurEvent}
                    value={formValues.gst}
                    onChange={handleChange}
                  />
                </div>
                <div className="fields">
                  <Input
                    label="GST"
                    type="number"
                    name="totalTaxAmount"
                    placeholder="Amt"
                    value={formValues.totalTaxAmount}
                    // onBlur={onBlurEvent}
                    onChange={handleChange}
                    readOnly={true}
                  />
                </div>
              </div>
              {/* 3rh */}
              <div className="field__row__three">
                <div className="fields">
                  <Input
                    label="Round Amt"
                    type="number"
                    name="roundAmt"
                    onChange={handleChange}
                    value={formValues.roundAmt}
                    // onBlur={onBlurEvent}
                    isError
                    errorMsg={formErrors.roundAmt}
                    className=" form-control three__row"
                  />
                </div>
                <div className="fields">
                  <Input
                    l
                    label="NetAmt"
                    type="number"
                    name="netAmt"
                    value={formValues.netAmt}
                    onChange={handleChange}
                    // onBlur={onBlurEvent}
                    readOnly={true}
                  />
                </div>
                <div className="fields">
                  <Input
                    label="PaidAmt"
                    type="number"
                    name="paidAmt"
                    value={formValues.paidAmt}
                    onChange={handleChange}
                    // onBlur={onBlurEvent}
                    isError
                    errorMsg={formErrors.paidAmt}
                  />
                </div>
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
                <DatePicker
                  label="Date"
                  name="date"
                  className="date-picker"
                  value={formValues.date}
                  onChange={handleChange}
                  style={{ marginLeft: "15px" }}

                // isError
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
            // id="animate.css"
            // value="isSubmit"
            >
              Save
            </Button>
            <Button className="btn btn-secondary" onClick={clearForm}>
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
export default InstallEntry;
