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
  // initialState = {
  //   dates: "",
  //   version: "",
  //   customerId: "",
  //   companyName: "",
  //   phone: "",
  //   city: "",
  //   amount: "",
  //   discountPer: "",
  //   discountAmt: "",
  //   grossAmt: "",
  //   gst: "",
  //   totalTaxAmount: "",
  //   roundAmt: "",
  //   netAmt: "",
  //   paidAmt: "",
  //   details: "",
  //   remarks: "",
  //   date: "",
  //   selectedState: "",
  //   sourceOption: {},
  //   softwareOption: {},
  // };
  // state = this.initialState;

  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.validate();

  //   if (this.state.version === "" || this.state.customerId === "" || this.state.companyName === "" || this.state.phone === "" || this.state.city === "" || this.state.amount === "" || this.state.grossAmt === "" || this.state.roundAmt === "") {

  //     toast.error("Please, Filled all mandatory fields !");
  //   } else {
  //     toast.success("Form Submitted!");
  //   }

  //   this.handleReset();
  // };

  // validate = () => {
  //   let name = this.state.customerId;
  //   let errors = {};
  //   let isValid = true;

  //   if (!this.state.customerId) {
  //     isValid = false;
  //     errors["name"] = "Enter Valid Value";
  //   }
  //   return isValid;
  // };
  // handleReset = () => {
  //   this.setState(() => this.initialState);
  // };

  // handleSourceChange = (newValue) => {
  //   this.setState({
  //     sourceOption: newValue
  //   })
  // }

  // handleSoftwareChange = (e) => {
  //   this.setState({
  //     ...this.state,
  //     softwareOption: e.target.value
  //   })
  //   console.log("Value::", this.state.softwareOption)
  // }

  constructor(props) {
    super(props);

    this.initialValues = {
      date: "",
      customerId: "",
      companyName: "",
      city: "",
      reinstall: "",
      amt: "",
      remark: "",
      dates: "",
      selectedState: "",
      sourceOption: {},
      paid: {},
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validate = (values) => {
    const errors = {};

    if (!values.version) {
      errors.version = "Enter version";
    }

    if (!values.customerId) {
      errors.customerId = "Enter customerId";
    }
    if (!values.companyName) {
      errors.companyName = "Enter companyName";
    }
    if (!values.city) {
      errors.city = "Enter city";
    }
    if (!values.amount) {
      errors.amount = "Enter amount";
    }
    return errors;

  };
  handleSubmit = (values, setSubmitting) => {
    setTimeout(() => {
      // alert(JSON.stringify(values, null, 2));
      toast.success("Form submitted");
      setSubmitting(false);
    }, 400);
  };



  handleReset = () => {
    this.setState(() => this.initialState);
  };


  render() {

    return (
      <>
        <Header />
        <SubHeader />
        <div className="form__container">
          <Formik
            initialValues={this.initialValues}
            validate={(values) => this.validate(values)}
            onSubmit={(values, { setSubmitting }) =>
              this.handleSubmit(values, setSubmitting)
            }
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
              /* and other goodies */
            }) => (
              <form
                onSubmit={handleSubmit}
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
                      {/* <div className="select">
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
                      </div> */}
                    </div>

                    <div className="fields">
                      <Input
                        type="text"
                        label="Version"
                        name="version"
                        className="form-control marginleft_70"
                        id="version"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.version}
                        isError
                        errorMsg={errors.version}
                      />
                      <span className="error-msg">{errors.version && touched.version && errors.version}</span>

                    </div>
                    <div className="field__row">
                      <div className="fields">
                        <Input
                          className="form-control cust_id_left"
                          type="text"
                          label="Cust Id"
                          name="customerId"
                          id="customerId"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.customerId}
                          isError
                          errorMsg={errors.customerId}

                        />
                        <span className="error-msg">{errors.customerId && touched.customerId && errors.customerId}</span>

                      </div>
                      <div className="fields">
                        <Input
                          type="text"
                          label="Company"
                          name="companyName"
                          id="companyName"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.companyName}
                          isError
                          errorMsg={errors.companyName}

                        />
                        <span className="error-msg">{errors.companyName && touched.companyName && errors.companyName}</span>

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
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.phone}
                          isError
                          errorMsg={errors.phone}

                        />
                        <span className="error-msg">{errors.phone && touched.phone && errors.phone}</span>

                      </div>
                      <div className="fields">
                        <Input
                          type="text"
                          label="city"
                          name="city"
                          id="city"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.city}
                          isError
                          errorMsg={errors.city}
                        />
                        <span className="error-msg">{errors.city && touched.city && errors.city}</span>

                      </div>
                    </div>


                    <div className="field__row__three">
                      <div className="fields">
                        <Input
                          label="Total Amt"
                          name="amount"
                          id="amount"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.amount}
                          isError
                          errorMsg={errors.amount}

                          className=" form-control three__row"

                        />
                        <span className="error-msg">{errors.amount && touched.amount && errors.amount}</span>

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
                          // onChange={this.handleChange}
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
                    // onClick={this.handleSubmit}
                    onClick={isSubmitting}

                  >
                    Save
                  </Button>
                  <input type="reset" value="Clear" className="btn btn-secondary" />

                </div>
              </form>
            )}
          </Formik>
        </div>
        <ToastContainer />
        <Footer />
      </>
    );
  };
};
export default InstallEntry;