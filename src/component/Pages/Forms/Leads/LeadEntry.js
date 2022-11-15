import React, { Fragment, Component } from "react";

// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { Formik } from "formik";
import PhoneAlt from "../../../../shared/Reusable/Phone&Alt";

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
class LeadEntry extends Component {
  // initialState = {
  //   companyName: "",
  //   contperson: "",
  //   altPhone: "",
  //   phone: "",
  //   area: "",
  //   address: "",
  //   email: "",
  //   other: "",
  //   date: "",
  //   remark: "",
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

  //   if (this.state.companyName === "" || this.state.contperson === "" || this.state.phone === "" || this.state.email === "") {
  //     toast.error("Please, Filled all mandatory fields !");
  //   } else {
  //     toast.success("Form Submitted!");
  //   }

  //   this.handleReset();
  // };

  // validate = (e) => {

  //   let errors = {};
  //   let isValid = true;

  //   if (!errors.companyName) {
  //     errors.name = "Enter Valid Value";
  //     isValid = false;
  //     alert("Its not working..")
  //   }
  //   else {
  //     alert("Its working")
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
      companyName: "",
      contperson: "",
      altPhone: "",
      phone: "",
      area: "",
      address: "",
      email: "",
      other: "",
      date: "",
      remark: "",
      selectedState: "",
      sourceOption: {},
      softwareOption: {},
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

    if (!values.companyName) {
      errors.companyName = " Enter companyName"
    }

    if (!values.contperson) {
      errors.contperson = "Enter contperson";
    }

    if (!values.city) {
      errors.city = "Enter city";
    }
    if (!values.email) {
      errors.email = "Enter email";
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

  handleSourceChange = (newValue) => {
    this.setState({
      ...this.state,
      sourceOption: newValue
    })
    console.log("sourceOption::", this.state.sourceOption.value)
  }

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
                  <div className="title"> Lead Entry </div>
                </div>
                <div className="form__wrapper">
                  <div className="form__left">
                    <div className="fields">
                      <div className="select">
                        <label htmlFor="" className="label">
                          Category
                        </label>
                        <select onChange={this.handleSoftwareChange}
                        // value={this.state.softwareOption}
                        >
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
                    <div className="field__row">
                      <div className="fields">
                        <Input
                        // style={{marginLeft:"25px"}}
                        className="form-control company_style"
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
                      <div className="fields">
                        <Input
                          type="text"
                          label="ContPerson"
                          name="contperson"
                          id="contperson"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.contperson}
                          isError
                          errorMsg={errors.contperson}
                        />
                        <span className="error-msg">{errors.contperson && touched.contperson && errors.contperson}</span>

                      </div>
                    </div>

                    {/* <div className="field__row">
                      <div className="fields">
                        <Input
                        className="form-control company_style"
                          type="number"
                          label="phone"
                          name="phone"
                          // value={this.state.phone}
                          // onChange={this.handleChange}

                          isError
                        />
                      </div>
                      <div className="fields">
                        <Input
                        className="form-control company_style"
                          type="text"
                          label="AltPhone"
                          name="altPhone"
                        // value={this.state.altPhone}
                        // onChange={this.handleChange}
                        />
                      </div>
                    </div> */}
                      <PhoneAlt />

                    <Country />
                    <div className="fields">
                      <Input
                        // className="form-control left__21"
                        // style={{ width: "140%", marginLeft: "-21px" }}
                        className="form-control city_left_style"
                        type="text"
                        name="area"
                        label="Area/City"
                        id="city"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.city}
                        isError
                        errorMsg={errors.city}
                      />
                      <span className="error-msg">{errors.city && touched.city && errors.city}</span>

                    </div>
                    <div className="fields">
                      <TextArea
                        type="text"
                        label="Address"
                        name="address"
                        className="form-control city_left_style"
                        // style={{ width: "140%", marginLeft: "-21px" }}
                      // value={this.state.address}
                      // onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form__right">
                    <div className="fields">
                      <Input
                        type="text"
                        label="Email"
                        name="email"
                        id="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        isError
                        errorMsg={errors.email}
                      />
                      <span className="error-msg">{errors.email && touched.email && errors.email}</span>

                    </div>
                    <div className="fields">
                      <Select
                        label="Source"
                        options={Source}
                        className="select-control source-select"
                        defaultValue={Source[1]}
                        onChange={this.handleSourceChange}
                      />
                    </div>
                    {/* {this.state.sourceOption.value === "Dealer" ? (
                      <>
                        <div className="field__row">
                          <div className="fields">
                            <Input
                              label="DealerId"
                              type="number"
                              name="dealerId"
                             
                            />
                          </div>
                          <div className="fields">
                            <Input label="Name" type="email" />
                          </div>
                        </div>
                      </>
                    ) : null} */}
                    <div className="fields">
                      <Input
                        type="text"
                        name="other"
                        label="Others"
                      // value={this.state.other}
                      // onChange={this.handleChange}
                      />
                    </div>
                    <div className="field__row">
                      <div className="fields">
                        <Select
                          options={Status}
                          className="select-control status-select-right"
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
                      // value={this.state.date}
                      // onChange={this.handleChange}

                      />
                    </div>
                    <div className="fields">
                      <TextArea
                        label="Remarks"
                        name="remark"
                        // value={this.state.remark}
                        // onChange={this.handleChange}
                        className="form-control right_13"

                      />
                    </div>
                  </div>
                </div>
                <div className="btn__holder">
                  <Button
                    type="isSubmit"
                    className="btn btn-primary"
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
export default LeadEntry;