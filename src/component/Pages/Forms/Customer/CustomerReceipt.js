import React, {  Component } from "react";

// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Button } from "react-bootstrap";

// import { Toast } from "primereact/toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";

// Phone Number
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const BillNo = [
  { value: "Bill No 1", label: "Bill No 1" },
  { value: "Bill No 2", label: "Bill No 2" },
  { value: "Bill No 3", label: "Bill No 3" },
];

const payMode = [
  { value: "Cash", label: "Cash" },
  { value: "Card", label: "Card" },
  { value: "UPI", label: "UPI" },
];

class CustomerReceipt extends Component {
  initialState = {
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

    if (this.state.customerId <= 1) {
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

  render() {
    return (
      <>
        <Header />
        <SubHeader />
        {/* <Toast ref={(el) => (this.toast = el)} /> */}
        <div className="form__container">
          <form
            onReset={this.handleReset}
            // onSubmit={this.handleSubmit}
            className="form__content"
          >
            <div className="title-display">
              <div className="title"> Customer Receipt </div>
            </div>
            <div className="form__wrapper">
              <div className="form__left">
                <div className="fields">
                  <Input
                    type="text"
                    label="CustomerId"
                    style={{
                      marginLeft: "-70px",
                      width: "100%",
                    }}
                    name="customerId"
                    value={this.state.customerId}
                    onChange={this.handleChange}
                    isError

                    // errorMsg={error.customerId}
                  />
                  {/* <p>{this.state.customerId}</p> */}
                </div>
                {/* <p {error.customerId}></p> */}
                {/* <p className="show-errors-left"> {formErrors.customerId}</p> */}

                <div className="fields">
                  <Input
                    type="text"
                    label="Company Name"
                    style={{
                      marginLeft: "-70px",
                      width: "100%",
                    }}
                    name="companyName"
                    value={this.state.companyName}
                    onChange={this.handleChange}
                    isError
                    errorMsg={this.validate}
                  />
                </div>
                {/* <p className="show-errors-left"> {formErrors.companyName}</p> */}

                <div className="fields">
                  <div className="input-fields">
                    <label htmlFor="" className="label">
                      Phone
                    </label>
                    <PhoneInput
                      style={{
                        marginLeft: "-70px",
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
                  <Select
                    label="Install"
                    placeholder="Select Installation No."
                    options={BillNo}
                    defaultValue={BillNo[0]}
                    className="select-control bill-select department-select"
                  />
                </div>
              </div>
              {/* Left Side End */}
              {/* Right Side Start */}
              <div className="form__right">
                <div className="fields">
                  <Select
                    label="PayMode"
                    options={payMode}
                    className="select-control source-select"
                    defaultValue={payMode[0]}
                    isError
                  />
                </div>

                <div className="fields">
                  <Input
                    type="text"
                    label="PaidAmt"
                    name="paidAmt"
                    value={this.state.paidAmt}
                    onChange={this.handleChange}
                    isError
                    // errorMsg={formErrors.paidAmt}
                  />
                </div>
                {/* <p className="show-errors"> {formErrors.paidAmt}</p> */}

                <div className="fields">
                  <TextArea
                    type="text"
                    label="Remarks"
                    rows="2"
                    name="remarks"
                    value={this.state.remarks}
                    onChange={this.handleChange}
                    style={{
                      marginLeft: "13px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="btn__holder">
              <Button
                type="submit"
                className="btn btn-primary"
                // onClick={animateCss}
                onClick={this.handleSubmit}
              >
                Save
              </Button>
              <Button className="btn btn-secondary" onClick={this.handleReset}>
                Clear
              </Button>
            </div>
          </form>
        </div>
        <Footer />
        {/* Source Modal*/}
        <ToastContainer />
      </>
    );
  }
}
export default CustomerReceipt;
