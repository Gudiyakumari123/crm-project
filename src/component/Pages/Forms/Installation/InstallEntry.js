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


const CategoryList = [
  { value: "Wonder POS", label: "Wonder POS" },
  { value: "Health Fly", label: "Health Fly" },
  { value: "Edu Fly", label: "Edu Fly" },
]

const WonderPOSList = [
  { value: "General Retail & Wholesale", label: "General Retail & Wholesale" },
  { value: "Pharmacy Retail & Wholesale", label: "Pharmacy Retail & Wholesale" },
  { value: "Restaurant", label: "Restaurant" },
  { value: "Hypermarket", label: "Hypermarket" },
  { value: "Supermarket", label: "Supermarket" },
  { value: "FMCC Distribution", label: "FMCC Distribution" },
  { value: "Jewellery Retail & Wholesale", label: "Jewellery Retail & Wholesale" },
  { value: "Hallmarking Centre Software", label: "Hallmarking Centre Software" },
  { value: "Gas Agency", label: "Gas Agency" },
  { value: "Readymade Retail & Wholesale", label: "Readymade Retail & Wholesale" },
  { value: "Textiles Retail & Wholesale", label: "Textiles Retail & Wholesale" },
  { value: "Fruits & Vegetables", label: "Fruits & Vegetables" },
  { value: "Rice Traders / Mundy", label: "Rice Traders / Mundy" },
  { value: "Fancy Store", label: "Fancy Store" },
  { value: "Footwear Shop", label: "Footwear Shop" },
  { value: "Mobile Sales & Service", label: "Mobile Sales & Service" },
  { value: "Computer Sales & Service", label: "Computer Sales & Service" },
  { value: "Electrical Shop", label: "Electrical Shop" },
  { value: "Spa & Saloon", label: "Spa & Saloon" },
  { value: "Laundry / Dry Clean", label: "Laundry / Dry Clean" },
  { value: "Books Shop", label: "Books Shop" },
  { value: "Florists", label: "Florists" },
  { value: "Home Decor & Furniture", label: "Home Decor & Furniture" },
  { value: "Optical Shop", label: "Optical Shop" },
  { value: "Stationery Shop", label: "Stationery Shop" },
  { value: "Toys & Gift Shop", label: "Third" },
  { value: "Watches", label: "Watches" },
  { value: "Home Appliances", label: "Home Appliances" },
  { value: "Surgical", label: "Surgical" },
  { value: "Chemists & Druggists", label: "Chemists & Druggists" },
  { value: "Auto Parts", label: "Auto Parts" },
  { value: "Fertilizer & Agro Products", label: "Fertilizer & Agro Products" },
  { value: "Hardware Shop", label: "Hardware Shop" },
  { value: "Sports & Fitness", label: "Sports & Fitness" },
  { value: "Tyre", label: "Tyre" },
  { value: " Vessel Shop", label: " Vessel Shop" },
  { value: "Oil Shop", label: "Oil Shop" },
  { value: "Paints Shop", label: "Paints Shop" },
  { value: "Water Companies", label: "Water Companies" },
  { value: "Pizza Shop", label: "Pizza Shop" },
  { value: "Coffee Shop", label: "Coffee Shop" },
  { value: "Bakery", label: "Bakery" },
  { value: "Sweet Shop", label: "Sweet Shop" },
  { value: "Bar /Pubs", label: "Bar /Pubs" },
  { value: "Ice Cream Shop", label: "Ice Cream Shop" },
  { value: "Juice Shop", label: "Juice Shop" },
  { value: "Tea Shop", label: "Tea Shop" },
  { value: "Food Court", label: "Food Court" },
  { value: "Auto Finance", label: "Auto Finance" },
  { value: "Jewellery Loan", label: "Jewellery Loan" },
  { value: "Crackers Shop", label: "Crackers Shop" },
]

const HealthFlyList = [
  { value: "Hospital", label: "Hospital" },
  { value: "Multi-Specialty Hospital", label: "Multi-Specialty Hospital" },
  { value: "Clinic / Homecare", label: "Clinic / Homecare" },
  { value: "Ayurvedic Hospital", label: "Ayurvedic Hospital" },
]

const EduFlyList = [
  { value: "School", label: "School" },
  { value: "College / University", label: "College / University" },
  { value: "Study Centre / Institute", label: "Study Centre / Institute" },
]


const WonderPOS = () => {
  return (
    <>
      <Select
        label="Software"
        options={WonderPOSList}
        defaultValue={WonderPOSList[0]}
      />
    </>
  )
}
const HealthFly = () => {
  return (
    <>
      <Select
        label="Software"
        options={HealthFlyList}
        defaultValue={HealthFlyList[0]}
      />
    </>
  )
}
const EduFly = () => {
  return (
    <>
      <Select
        label="Software"
        options={EduFlyList}
        defaultValue={EduFlyList[0]}
      />
    </>
  )
}
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

  handleSoftwareChange = (newValue) => {
    this.setState({
      ...this.state,
      softwareOption: newValue
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
                  <Select
                    label="Category"
                    options={CategoryList}
                    onChange={this.handleSoftwareChange}
                    defaultValue={CategoryList[0]}
                  />
                </div>

                <div className="fields">
                  {
                    this.state.softwareOption.value === "Wonder POS" ? <><WonderPOS /></> : null
                  }
                  {
                    this.state.softwareOption.value === "Health Fly" ? <><HealthFly /></> : null
                  }
                  {
                    this.state.softwareOption.value === "Edu Fly" ? <><EduFly /></> : null
                  }


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
                      className=" form-control three__row "

                    />

                  </div>
                  <div className="fields">
                    <Input
                      label="DisAmt"
                      type="number"
                      name="discountAmt"
                      placeholder="Amt"
                      className=" form-control three__row net_amt"
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
                      className=" form-control three__row gst_per "
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
                      label="NetAmt"
                      type="number"
                      name="netAmt"
                      // value={this.state.netAmt}
                      // onChange={this.handleChange}
                      // onBlur={onBlurEvent}
                      readOnly={true}
                      className=" form-control three__row net_amt"
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
                      className=" form-control three__row net_amt"

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