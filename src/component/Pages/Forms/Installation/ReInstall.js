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
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});
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

const ReInstall = ({ initialValue, props }) => {
  const [phone, setPhone] = useState(initialValue);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [paid, setPaid] = useState({});

  // Form Validations

  const [formValues, setFormValues] = useState({
    date: "",
    customerId: "",
    companyName: "",
    phone: "",
    city: "",
    software: "",
    install: "",
    reInstall: "",
    paidFree: "",
    amount: "",
    discountPer: "",
    discountAmt: "",
    grossAmt: "",
    tax: 18,
    totalTaxAmount: "",
    roundAmt: "",
    netAmt: "",
    paidAmt: "",
    balAmt: "",
    payMode: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    //If DiscountAmnt is present and  >0
    if (name === "discountAmt" && value && value > 0) {
      console.log("value::", value);
      setFormValues({
        ...formValues,
        [name]: value,
        discountPer: 0,
      });
    }
    //other wise do the usual set the values
    else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  /***UTIlit */
  function handleDiscountPercentage() {
    let getDiscountPercent;
    if (formValues.discountPer > 0) {
      getDiscountPercent = Math.ceil(
        (formValues.amount * formValues.discountPer) / 100
      );
      setFormValues({
        ...formValues,
        discountAmt: getDiscountPercent,
      });
    }
  }

  /***MOve ito seprate file */
  const onBlurEvent = (event) => {
    console.log("Event for Tab Press:", event.target.name);

    switch (event.target.name) {
      case "discountPer":
        handleDiscountPercentage();
        break;

      case "discountAmt":
        const grossAmount = Math.ceil(
          formValues.amount - formValues.discountAmt
        );
        setFormValues({
          ...formValues,
          grossAmt: grossAmount,
        });
        break;

      case "tax":
        const totalTaxAmount = Math.ceil(
          (formValues.grossAmt * formValues.tax) / 100
        );
        setFormValues({
          ...formValues,
          totalTaxAmount: totalTaxAmount,
        });
        break;

      case "totalTaxAmount":
        const getNetAmount = formValues.grossAmt + formValues.totalTaxAmount;
        setFormValues({
          ...formValues,
          netAmt: getNetAmount,
        });
        break;

      case "roundAmt":
        const getRoundAmount =
          formValues.grossAmt + formValues.totalTaxAmount - formValues.roundAmt;
        setFormValues({
          ...formValues,
          netAmt: getRoundAmount,
        });
        break;

      case "paidAmt":
        const balanceAmount = formValues.netAmt - formValues.paidAmt;
        setFormValues({
          ...formValues,
          balAmt: balanceAmount,
        });
        break;
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert("Everything is Good. Form Submitted");
    } else {
      // alert("Please , Fill the all required Fields");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.customerId) {
      errors.customerId = "Enter customerId";
    }
    if (!values.companyName) {
      errors.companyName = "Enter companyName";
    }
    if (!values.city) {
      errors.city = "Enter city";
    }
    if (!values.software) {
      errors.software = "Enter software";
    }
    if (!values.amount) {
      errors.amount = "Enter amount";
    }
    if (!values.paidAmt) {
      errors.paidAmt = "Enter paidAmt";
    }
    if (!values.amount) {
      errors.amount = "Enter amount";
    }
    if (!values.paidAmt) {
      errors.paidAmt = "Enter paidAmt";
    }
    return errors;
  };

  console.log("FormValues::", formValues);

  // const options = useMemo(() => countryList().getData(), []);

  function animateCss() {
    toast.dark("Hey 👋, Data Has Been Saved!", {
      transition: bounce,
    });
  }

  function handleReset() {
    window.location.reload(false);
  }
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
                <DatePicker
                  label="Date"
                  className="date-picker"
                  style={{ marginLeft: "-68px" }}
                // isError
                />
              </div>

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
                  <PhoneInput
                    label="Phone"

                    style={{
                      marginLeft: "110px",
                      width: "208px",
                    }}
                    value={phone}
                    name="mobileNumber"
                    className="form-control"
                    international
                    defaultCountry="IN"
                    onChange={setPhone}
                  />
                  <p className="show-errors-left"> {formErrors.city} </p>
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
                  <p className="show-errors-left"> {formErrors.city} </p>
                </div>
              </div>

              <div className="field__row">
                <div className="fields">
                  <div className="input-fields">
                    <label htmlFor="" className="label">
                      Phone
                    </label>
                    <PhoneInput
                      style={{
                        marginLeft: "8px",
                        width: "208px",
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
                  <Input type="text" label="Area/City" />
                </div>
              </div>

              <div className="fields">
                <Select
                  label="Install"
                  placeholder="Select Installation No."
                  options={Installation}
                  defaultValue={Installation[0]}
                  className="select-control bill-select department-select"
                />
              </div>
              <div className="fields">
                <TextArea
                  type="text"
                  label="ReInstall"
                  style={{ width: "140%", marginLeft: "-21px" }}
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
                  onChange={setPaid}
                  isError
                />
              </div>

              {paid.value === "Paid" ? (
                <>
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
                      <Input label="Dis%"
                        name="discountPer"
                        placeholder="%"
                        value={formValues.discountPer}
                        onBlur={onBlurEvent}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="fields">
                      <Input label="DisAmt"
                        type="number"
                        name="discountAmt"
                        placeholder="Amt"
                        value={formValues.discountAmt}
                        onBlur={onBlurEvent}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="field__row__three">
                    <div className="fields">
                      <Input
                        label="Grs Amt."
                        type="number"
                        name="grossAmt"
                        value={formValues.grossAmt}
                        onChange={handleChange}
                        readOnly={true}
                        className=" form-control three__row"
                      />
                    </div>
                    <div className="fields">
                      <Input label="Tax%"
                        name="tax"
                        value={formValues.tax}
                        onChange={handleChange}
                        onBlur={onBlurEvent}
                      />
                    </div>
                    <div className="fields">
                      <Input label="Tax₹"
                        type="number"
                        name="totalTaxAmount"
                        placeholder="&#8377;"
                        value={formValues.totalTaxAmount}
                        onChange={handleChange}
                        onBlur={onBlurEvent}
                      />
                    </div>
                  </div>
                  <div className="field__row">
                    <div className="fields">
                      <Input

                        label="Round"
                        type="number"
                        name="roundAmt"
                        onChange={handleChange}
                        value={formValues.roundAmt}
                        onBlur={onBlurEvent}
                        style={{ marginLeft: "45px" }}
                      />
                    </div>
                    <div className="fields">
                      <Input
                        label="NetAmt"
                        type="number"
                        name="number"
                        value={formValues.netAmt}
                        onChange={handleChange}
                        onBlur={onBlurEvent}
                        readOnly={true}
                      />
                    </div>
                  </div>

                  <div className="field__row">
                    <div className="fields">
                      <Input type="text"
                        label="Paid.Amt"
                        style={{ marginLeft: "42px" }}
                      />
                    </div>
                    <div className="fields">
                      <Input type="text" label="Bal.Amt" />
                    </div>
                  </div>
                  <div className="field__row">
                    <div className="fields">
                      <Select
                        options={payMode}
                        className="select-control status-select"
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
                <Input type="text" label="Amt" />
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
                  <Input type="date" label="Date" />
                </div>
              </div>

              <div className="fields">
                <TextArea label="Remarks" style={{ marginLeft: "15px" }} />
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
            <Button className="btn btn-secondary">Clear</Button>
          </div>
        </div>
      </div>
      <Footer />
      {/* Source Modal*/}
    </>
  );
};
export default ReInstall;
