import React, { Fragment, Component } from "react";
import PhoneAlt from "../../../../shared/Reusable/Phone&Alt";

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

class LeadEntry extends Component {
  initialState = {
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
    selectedState: [],
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

    if (this.state.companyName === "" || this.state.contperson === "" || this.state.email === "") {
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
            onReset={this.handleReset}
            className="form__content">
            <div className="title-display">
              <div className="title"> Lead Entry </div>
            </div>
            <div className="form__wrapper">
              <div className="form__left">
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
                <div className="field__row">
                  <div className="fields">
                    <Input
                      className="form-control company_style"
                      type="text"
                      label="Company"
                      name="companyName"
                      id="companyName"
                      value={this.state.companyName}
                      onChange={this.handleChange}
                      isError
                      errorMsg={this.state.companyName === ""}
                    />
                  </div>
                  <div className="fields">
                    <Input
                      className="form-control countperson-style "
                      type="text"
                      label="contperson"
                      name="contperson"
                      value={this.state.contperson}
                      onChange={this.handleChange}
                      isError
                      errorMsg={this.state.contperson === ""}

                    />
                  </div>
                </div>

                <PhoneAlt />

                <Country />
                <div className="fields">
                  <Input
                    className="form-control city_left_style"
                    type="text"
                    name="area"
                    label="Area/City"
                    value={this.state.area}
                    onChange={this.handleChange}


                  />
                </div>
                <div className="fields">
                  <TextArea
                    className="form-control city_left_style"
                    type="text"
                    label="Address"
                    name="address"

                    value={this.state.address}
                    onChange={this.handleChange}

                  />
                </div>
              </div>
              <div className="form__right">
                <div className="fields">
                  <Input
                    type="text"
                    label="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    isError
                    errorMsg={this.state.email === ""}
                  />
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
                {this.state.sourceOption.value === "Dealer" ? (
                  <>
                    <div className="field__row">
                      <div className="fields">
                        <Input
                          className="form-control dealer_id"
                          label="DealerId"
                          type="number"
                          name="dealerId"
                        // style={{ marginLeft: "42px" }}
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
                    value={this.state.other}
                    onChange={this.handleChange}

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
                      className="select-control  status-select"
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
                    value={this.state.date}
                    onChange={this.handleChange}

                  />
                </div>
                <div className="fields">
                  <TextArea
                    label="Remarks"
                    name="remark"
                    value={this.state.remark}
                    onChange={this.handleChange}

                    className="form-control right_13"

                  />
                </div>
              </div>
            </div>
            <div className="btn__holder">
              <Button
                type="isSubmit"
                className="btn btn-primary"
                onClick={this.handleSubmit}
                id="animate.css"
                value="isSubmit"
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
export default LeadEntry;