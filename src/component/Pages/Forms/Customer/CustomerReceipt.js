import React, { Fragment, Component } from "react";

// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Button } from "react-bootstrap";

// import { Toast } from "primereact/toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// // Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";

// Phone Number
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { Formik } from "formik";

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

class CustomerReceipt extends React.Component {
    initialState = {
        customerId: "",
        companyName: "",
        mobileNumber: "",
        install: "",
        payMode: "",
        paidAmt: "",
        remarks: "",
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
    
        if (this.state.customerId ==="" || this.state.companyName==="" || this.state.paidAmt==="") {
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
                <div>
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
                                            className="form-control marginleft_70"
                                            label="Company ID"
                                            type="text"
                                            name="customerId"
                                            onChange={this.handleChange}
                                            value={this.state.customerId}
                                            isError
                                            errorMsg={this.state.customerId ===""}
                                        />

                                    </div>

                                    <div className="fields">
                                        <Input
                                            type="text"
                                            label="Company"

                                            className="form-control marginleft_70"
                                            name="companyName"
                                            id="companyName"

                                            onChange={this.handleChange}
                                            value={this.state.companyName}
                                            isError
                                            errorMsg={this.state.companyName ===""}

                                        />

                                    </div>
                                    <div className="fields">
                                        <div className="input-fields">
                                            <label htmlFor="" className="label">
                                                Phone
                                            </label>
                                            <PhoneInput
                                                className="form-control marginleft_70"
                                                // value={phone}
                                                name="mobileNumber"
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
                                            className="select-control Install-select"
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
                                        />
                                    </div>

                                    <div className="fields">
                                        <Input
                                            type="text"
                                            label="PaidAmt"
                                            name="paidAmt"
                                            id="paidAmt"
                                            onChange={this.handleChange}
                                            value={this.state.paidAmt}
                                            isError
                                            errorMsg={this.state.paidAmt ===""}
                                        />

                                    </div>
                                    <div className="fields">
                                        <TextArea
                                            type="text"
                                            label="Remarks"
                                            // rows="2"
                                            name="remarks"
                                            value={this.state.remarks}
                                            // onChange={this.handleChange}
                                            className="form-control right_13"

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
                    <Footer />

                </div>
                <ToastContainer />

            </>

        );
    }
}
export default CustomerReceipt;
