import React, { useState, useEffect, Fragment, Component } from "react";

// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Button} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';


// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";
import Country from "../../../../shared/Reusable/CountryState";
import PhoneInput from "../../../../shared/Reusable/PhoneInput";

// Constants
import {
  Source,
  ConversionRatio,
  Status,
} from "../../../../data/crm-constants";


const LeadEntry = () => {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [phone, setPhone] = useState(false);

  const initialValues = {
    companyName: "",
    contperson: "",
    altPhone: "",
    area: "",
    address: "",
    email: "",
    other: "",
    date: "",
    remark: "",
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

  const [sourceOption, setSourceOption] = useState({});

  const [selectedState, setSelectedState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate({ formValues, phone }));
    setIsSubmit(true);
    setPhone();
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
    if (!values.companyName) {
      errors.companyName = "Enter companyName";
    }
    if (!values.contperson) {
      errors.contperson = "Enter contperson";
    }
    if (!values.email) {
      errors.email = "Enter email";
    }
    if (!values.phone) {
      errors.phone = "Enter phone";
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
            <div className="title"> Lead Entry </div>
          </div>
          <div className="form__wrapper">
            <div className="form__left">
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
              <div className="field__row">
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
                <div className="fields">
                  <Input
                    type="text"
                    label="ContPerson"
                    name="contperson"
                    value={formValues.contperson}
                    onChange={handleChange}
                    isError
                    errorMsg={formErrors.contperson}
                  />
                  <p className="show-errors-left"> {formErrors.contperson} </p>
                </div>
              </div>

              <div className="field__row">
                <div className="fields">
                  <PhoneInput
                    label="Phone"
                    name="phone"
                    value={phone}
                    onChange={setPhone}
                    isError
                    errorMsg={formErrors.phone}
                    style={{ marginLeft: "32px" }}
                  />
                  <p className="show-errors-left">{formErrors.phone}</p>
                </div>
                <div className="fields">
                  <Input
                    type="text"
                    label="AltPhone"
                    name="altPhone"
                    value={formValues.altPhone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Country />
              <div className="fields">
                <Input
                  type="text"
                  name="area"
                  label="Area/City"
                  value={formValues.area}
                  onChange={handleChange}
                  style={{ width: "140%", marginLeft: "-21px" }}
                />
              </div>
              <div className="fields">
                <TextArea
                  type="text"
                  label="Address"
                  name="address"
                  style={{ width: "140%", marginLeft: "-21px" }}
                  value={formValues.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form__right">
              <div className="fields">
                <Input
                  type="text"
                  label="Email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  isError
                  errorMsg={formErrors.email}
                  //  readOnly={true}
                />
              </div>
              <p className="show-errors"> {formErrors.email} </p>

              <div className="fields">
                <Select
                  label="Source"
                  options={Source}
                  className="select-control source-select"
                  defaultValue={Source[1]}
                  onChange={setSourceOption}
                />
              </div>
              {sourceOption.value === "Dealer" ? (
                <>
                  <div className="field__row">
                    <div className="fields">
                      <Input
                        label="DealerId"
                        type="number"
                        name="dealerId"
                        style={{ marginLeft: "42px" }}
                      />
                    </div>
                    <div className="fields">
                      <Input label="Name" type="email" />
                    </div>
                  </div>
                </>
              ) : null}
              <div className="fields">
                <Input
                  type="text"
                  name="other"
                  label="Others"
                  value={formValues.other}
                  onChange={handleChange}
                />
              </div>
              <div className="field__row">
                <div className="fields">
                  <Select
                    options={Status}
                    className="select-control status-select"
                    label="Status"
                    defaultValue={Status[0]}
                  />
                </div>
                <div className="fields">
                  <Select
                    options={ConversionRatio}
                    className="select-control"
                    label="Ratio"
                    defaultValue={ConversionRatio[0]}
                  />
                </div>
              </div>
              <div className="fields">
                <Input
                  type="date"
                  name="date"
                  label="Date"
                  value={formValues.date}
                  onChange={handleChange}
                />
              </div>
              <div className="fields">
                <TextArea
                  label="Remarks"
                  name="remark"
                  value={formValues.remark}
                  onChange={handleChange}
                  style={{ marginLeft: "15px" }}
                />
              </div>
            </div>
          </div>
          <div className="btn__holder">
            <Button
              type="isSubmit"
              className="btn btn-primary"
              onClick={handleSubmit}
              id="animate.css"
              value="isSubmit"
            >
              Save
            </Button>
            <Button className="btn btn-secondary" onClick={clearForm}>
              Clear
            </Button>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
      {/* Source Modal*/}
    </>
  );
};
export default LeadEntry;
