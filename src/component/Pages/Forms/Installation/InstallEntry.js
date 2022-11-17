import React, { Fragment, Component } from "react";

// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';

import { Formik } from "formik";

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

const Category1 = ["WonderPOS", "Healthy Fly", "Edu Fly"];
const Softwares = {
  "WonderPOS": [
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
const Priority = [
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
  { value: "Low", label: "Low" },
];
class InstallEntry extends Component {
  initialState = {
    date: "",
    customerId: "",
    version:"",
    companyName: "",
    phone:"",
    city: "",
    reinstall: "",
    amount:"",
    amt: "",
    remark: "",
    dates: "",
    selectedState: "",
    sourceOption: {},
    paid: {},
    selectedState: "",
    sourceOption: {},
    softwareOption: {},
  };
  state = this.initialState;

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.validate();

    if (this.state.version === "" || this.state.customerId === "" || this.state.companyName === "" || this.state.phone === "" || this.state.city === "" || this.state.amount === "" || this.state.grossAmt === "" || this.state.roundAmt === "") {

      toast.error("Please, Filled all mandatory fields !");
    } else {
      toast.success("Form Submitted!");
    }

    this.handleReset();
  };

  validate = () => {
    let name = this.state.customerId;
    let errors = {};
    let isValid = true;

    if (!this.state.customerId) {
      isValid = false;
      errors["name"] = "Enter Valid Value";
    }
    return isValid;
  };
  handleReset = () => {
    this.setState(() => this.initialState);
  };

  handleSourceChange = (newValue) => {
    this.setState({
      sourceOption: newValue
    })
  }

  handleSoftwareChange = (e) => {
    this.setState({
      ...this.state,
      softwareOption: e.target.value
    })
    console.log("Value::", this.state.softwareOption)
  }
  render() {

    return (
      <>
        <Header />
        <SubHeader />
        <div className="form__container">

          <form
            // onSubmit={handleSubmit}
            onReset={this.handleReset}

            className="form__content">
            <div className="title-display">
              <div className="title"> Installation Entry </div>
            </div>
            <div className="form__wrapper">
              <div className="form__left">

                <div className="fields">
                  <Input
                    type="date"
                    label="Date"
                    name="dates"
                    // value={this.state.dates}
                    // onChange={this.handleChange}
                    className="form-control marginleft_70"
                  />
                </div>
                <div className="fields">
                  <div className="select ">
                    <label htmlFor="" className="label">
                      Category
                    </label>
                    <select onChange={this.handleSoftwareChange}>
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
                    {this.state.selectedState && (
                      <select>
                        {Softwares[this.state.selectedState].map((values) => {
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
                    className="form-control marginleft_70"
                    id="version"

                    onChange={this.handleChange}
                    value={this.state.version}
                    isError
                    errorMsg={this.state.version===""}
                  />

                </div>
                <div className="field__row">
                  <div className="fields">
                    <Input
                      className="form-control cust_id_left"
                      type="text"
                      label="Cust Id"
                      name="customerId"
                      id="customerId"

                      onChange={this.handleChange}
                      value={this.state.customerId}
                      isError
                      errorMsg={this.state.customerId===""}

                    />

                  </div>
                  <div className="fields">
                    <Input
                      type="text"
                      label="Company"
                      name="companyName"
                      id="companyName"

                      onChange={this.handleChange}
                      value={this.state.companyName}
                      isError
                      errorMsg={this.state.companyName===""}

                    />

                  </div>

                </div>
                <div className="field__row">
                  <div className="fields">
                    <Input
                      className="form-control cust_id_left"
                      type="text"
                      label="Phone"
                      name="phone"
                      id="phone"

                      onChange={this.handleChange}
                      value={this.state.phone}
                      isError
                      errorMsg={this.state.phone===""}

                    />

                  </div>
                  <div className="fields">
                    <Input
                      type="text"
                      label="city"
                      name="city"
                      id="city"

                      onChange={this.handleChange}
                      value={this.state.city}
                      isError
                      errorMsg={this.state.city===""}
                    />

                  </div>
                </div>


                <div className="field__row__three">
                  <div className="fields">
                    <Input
                      label="Total Amt"
                      name="amount"
                      id="amount"

                      onChange={this.handleChange}
                      value={this.state.amount}
                      isError
                    errorMsg={this.state.amount===""}

                    

                      className=" form-control three__row"

                    />

                  </div>

                  <div className="fields">
                    <Input
                      label="Dis%"
                      name="discountPer"
                      placeholder="%"
                      id="discountPer"
                      className=" form-control three__row"

                    />

                  </div>
                  <div className="fields">
                    <Input
                      label="DisAmt"
                      type="number"
                      name="discountAmt"
                      placeholder="Amt"
                      className=" form-control three__row"
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
                      className=" form-control three__row"
                    />

                  </div>
                  <div className="fields">
                    <Input
                      label="GST% "
                      type="number"
                      name="gst"
                      // onBlur={onBlurEvent}
                      // value={this.state.gst}
                      // onChange={thisthis.handleChange}
                      className=" form-control three__row"
                    />
                  </div>
                  <div className="fields">
                    <Input
                      label="GST"
                      type="number"
                      name="totalTaxAmount"
                      placeholder="Amt"
                      // value={this.state.totalTaxAmount}
                      // onBlur={onBlurEvent}
                      // onChange={this.handleChange}
                      readOnly={true}
                      className=" form-control three__row"
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
                      // onChange={this.handleChange}
                      // value={this.state.roundAmt}
                      // onBlur={onBlurEvent}
                      className=" form-control three__row"
                    />
                  </div>
                  <div className="fields">
                    <Input
                      l
                      label="NetAmt"
                      type="number"
                      name="netAmt"
                      // value={this.state.netAmt}
                      // onChange={this.handleChange}
                      // onBlur={onBlurEvent}
                      readOnly={true}
                      className=" form-control three__row"
                    />
                  </div>
                  <div className="fields">
                    <Input
                      label="PaidAmt"
                      type="number"
                      name="paidAmt"
                      // value={this.state.paidAmt}
                      // onChange={this.handleChange}
                      // onBlur={onBlurEvent}
                      className=" form-control three__row"

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
                    // value={this.state.details}
                    // onChange={this.handleChange}
                    className="form-control right_13"

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
                    name="date"
                    // value={this.state.date}
                    // onChange={this.handleChange}
                    className="form-control date-style"
                  />
                </div>
                <div className="fields">
                  <TextArea
                    label="Remarks"
                    name="remarks"
                    className="form-control right_13"
                  // value={this.state.remarks}
                  // onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="btn__holder">
              <Button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}

              >
                Save
              </Button>
              <input type="reset" value="Clear" className="btn btn-secondary" />

            </div>
          </form>

        </div>
        <ToastContainer />
        <Footer />
      </>
    );
  };
};
export default InstallEntry;