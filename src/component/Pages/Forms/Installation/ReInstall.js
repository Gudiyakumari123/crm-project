import React, { Component, Fragment } from "react";

// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Button } from "react-bootstrap";
import DatePicker from "../../../../shared/Reusable/DatePicker";
import { ToastContainer, toast } from "react-toastify";

// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";
import PhoneInput from "../../../../shared/Reusable/PhoneInput";
import { render } from "@testing-library/react";
// Constants
// import {
//   Source,
//   ConversionRatio,
//   Status,
//   Paid
// } from "../../../../data/crm-constants";
// const bounce = cssTransition({
//   enter: "animate__animated animate__bounceIn",
//   exit: "animate__animated animate__bounceOut",
// });
const Paid = [
  { value: "Free", label: "Free" },
  { value: "Paid", label: "Paid" },
];
const Installation = [
  { value: "Installation 1", label: "Installation 1" },
  { value: "Installation 2", label: "Installation 2" },
  { value: "Installation 3", label: "Installation 3" },
];

const payMode = [
  { value: "Cash", label: "Cash" },
  { value: "Card", label: "Card" },
  { value: "UPI", label: "UPI" },
];

class ReInstall extends Component {
  initialState = {
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
  state = this.initialState;
  handleReset = () => {
    this.setState(() => this.initialState);
  };

  handleSourceChange = (newValue) => {
    this.setState({
      paid: newValue
    })
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });


    //If DiscountAmnt is present and  >0
    if (name === "discountAmt" && value && value > 0) {
      console.log("value::", value);
      this.setState({
        ...this.state,
        [name]: value,
        discountPer: 0,
      });
    }
    //other wise do the usual set the values
    else {
      this.setState({
        ...this.state,
        [name]: value,
      });
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.validate();

    if (this.state.customerId === "" || this.state.companyName || this.state.city) {
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
  //   /***UTIlit */
  handleDiscountPercentage = () => {
    let getDiscountPercent;
    if (this.state.discountPer > 0) {
      getDiscountPercent = Math.ceil(
        (this.state.amount * this.state.discountPer) / 100
      );
      this.setState({
        ...this.state,
        discountAmt: getDiscountPercent,
      });
    }
  }

  //   /***MOve ito seprate file */
  onBlurEvent = (event) => {
    console.log("Event for Tab Press:", event.target.name);

    switch (event.target.name) {
      case "discountPer":
        this.handleDiscountPercentage();
        break;

      case "discountAmt":
        const grossAmount = Math.ceil(
          this.state.amount - this.state.discountAmt
        );
        this.setState({
          ...this.state,
          grossAmt: grossAmount,
        });
        break;

      case "tax":
        const totalTaxAmount = Math.ceil(
          (this.state.grossAmt * this.state.tax) / 100
        );
        this.setState({
          ...this.state,
          totalTaxAmount: totalTaxAmount,
        });
        break;

      case "totalTaxAmount":
        const getNetAmount = this.state.grossAmt + this.state.totalTaxAmount;
        this.setState({
          ...this.state,
          netAmt: getNetAmount,
        });
        break;

      case "roundAmt":
        const getRoundAmount =
          this.state.grossAmt + this.state.totalTaxAmount - this.state.roundAmt;
        this.setState({
          ...this.state,
          netAmt: getRoundAmount,
        });
        break;

      case "paidAmt":
        const balanceAmount = this.state.netAmt - this.state.paidAmt;
        this.setState({
          ...this.state,
          balAmt: balanceAmount,
        });
        break;
    }
  };


  render() {
    return (
      <>
        <Header />
        <SubHeader />
        <div className="form__container">
          <div className="form__content">
            <div className="title-display">
              <div className="title"> Re-Installation Entry </div>
            </div>
            <div className="form__wrapper">
              <div className="form__left">
                <div className="fields">
                  <Input
                    className="form-control marginleft_70"
                    type="date"
                    label="Date"
                    name="date"
                    value={this.state.date}
                    onChange={this.handleChange}

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
                      value={this.state.customerId}
                      onChange={this.handleChange}
                      isError
                      errorMsg={this.state.customerId ===""}

                    />
                  </div>
                  <div className="fields">
                    <Input
                      type="text"
                      label="Company"
                      name="companyName"
                      id="companyName"
                      value={this.state.companyName}
                      onChange={this.handleChange}
                      isError
                      errorMsg={this.state.companyName ===""}

                    />
                  </div>
                </div>

                <div className="field__row">
                  <div className="fields">
                    <Input
                      // className="form-control cust_id_style"
                      className="form-control cust_id_left"

                      type="text"
                      label="Phone"
                      name="Phone"
                      // id="Phone"

                      // onChange={this.handleChange}
                      // value={this.state.Phone}
                      isError
                      // errorMsg={this.state.Phone ===""}

                    />
                  </div>
                  <div className="fields">
                    <Input
                      type="text"
                      label="City"
                      name="city"
                      id="city"
                      onChange={this.handleChange}
                      value={this.state.city}
                      isError
                      errorMsg={this.state.city ===""}

                    />

                  </div>
                </div>

                <div className="fields">
                  <Select
                    label="Install"
                    placeholder="Select Installation No."
                    options={Installation}
                    defaultValue={Installation[0]}
                    className="select-control department-select"
                  />
                </div>
                <div className="fields">
                  <TextArea
                    type="text"
                    label="ReInstall"
                    name="reinstall"
                    value={this.state.reinstall}
                    onChange={this.handleChange}
                    className="form-control marginleft_70"

                  />
                </div>
              </div>
              {/* Left Side End */}
              {/* Right Side Start */}
              <div className="form__right">
                <div className="fields">
                  <Select
                    label="Paid/Free"
                    options={Paid}
                    className="select-control source-select"
                    defaultValue={Paid[0]}
                    onChange={this.handleSourceChange}
                    isError
                  />
                </div>

                {this.state.paid.value === "Paid" ? (
                  <>
                    <div className="field__row__three">
                      <div className="fields">
                        <Input
                          label="Total Amt"
                          name="amount"
                          value={this.state.amount}
                          onChange={this.handleChange}
                          isError
                          // errorMsg={formErrors.amount}
                          className=" form-control amount_paid_style"
                        />
                      </div>
                      <div className="fields">
                        <Input
                          label="Dis%"
                          name="discountPer"
                          placeholder="%"
                          value={this.state.discountPer}
                          // onBlur={onBlurEvent}
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="fields">
                        <Input
                          label="DisAmt"
                          type="number"
                          name="discountAmt"
                          placeholder="Amt"
                          value={this.state.discountAmt}
                          // onBlur={onBlurEvent}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="field__row__three">
                      <div className="fields">
                        <Input
                          className=" form-control amount_paid_style"
                          label="Grs Amt."
                          type="number"
                          name="grossAmt"
                          value={this.state.grossAmt}
                          onChange={this.handleChange}
                          readOnly={true}
                        // className=" form-control three__row"
                        />
                      </div>
                      <div className="fields">
                        <Input
                          label="Tax%"
                          name="tax"
                          value={this.state.tax}
                          onChange={this.handleChange}
                        // onBlur={onBlurEvent}
                        />
                      </div>
                      <div className="fields">
                        <Input
                          label="Tax₹"
                          type="number"
                          name="totalTaxAmount"
                          placeholder="&#8377;"
                          value={this.state.totalTaxAmount}
                          onChange={this.handleChange}
                        // onBlur={onBlurEvent}
                        />
                      </div>
                    </div>
                    <div className="field__row">
                      <div className="fields">
                        <Input
                          className="form-control paid_style_round"

                          label="Round"
                          type="number"
                          name="roundAmt"
                          onChange={this.handleChange}
                          value={this.state.roundAmt}
                        // onBlur={onBlurEvent}

                        />
                      </div>
                      <div className="fields">
                        <Input
                          label="NetAmt"
                          type="number"
                          name="number"
                          value={this.state.netAmt}
                          onChange={this.handleChange}
                          // onBlur={onBlurEvent}
                          readOnly={true}
                        />
                      </div>
                    </div>

                    <div className="field__row">
                      <div className="fields">
                        <Input
                          className="form-control paid_style_round"
                          label="Paid.Amt"
                          type="number"
                          name="netAmt"
                          value={this.state.paidAmt}
                          onChange={this.handleChange}
                        // onBlur={onBlurEvent}
                        />
                      </div>
                      <div className="fields">
                        <Input
                          // className="form-control paid_style_round"
                          label="Bal.Amt"
                          type="number"
                          name="balAmt"
                          value={this.state.balAmt}
                          onChange={this.handleChange}
                        // onBlur={onBlurEvent}
                        />
                      </div>
                    </div>
                    <div className="field__row">
                      <div className="fields">
                        <Select
                          options={payMode}
                          className="select-control status-select-right"
                          label="PayMode"
                          defaultValue={payMode[0]}
                        />
                      </div>
                      <div className="fields">
                        <Input type="date" label="Date" />
                      </div>
                    </div>
                  </>
                ) : null}

                <div className="fields">
                  <Input
                    type="text"
                    label="Amt"
                    name="amt"
                    value={this.state.amt}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="field__row">
                  <div className="fields">
                    <Select
                      options={payMode}
                      className="select-control status-select"
                      label="PayMode"
                      defaultValue={payMode[0]}
                      isError
                    />
                  </div>
                  <div className="fields">
                    <Input
                      type="date"
                      label="Date"
                      name="dates"
                      value={this.state.dates}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>

                <div className="fields">
                  <TextArea
                    className="form-control right_13"
                    label="Remarks"
                    type="text"
                    name="remark"
                    value={this.state.remark}
                    onChange={this.handleChange}
                  // style={{ marginLeft: "15px" }}
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
              {/* <Button onClick={clearForm} className="btn btn-secondary">
                Clear
              </Button> */}
              <input type="reset" value="Clear" className="btn btn-secondary" />


            </div>
          </div>
        </div>
        <ToastContainer />
        <Footer />
        {/* Source Modal*/}
      </>
    );
  };
};
export default ReInstall;
