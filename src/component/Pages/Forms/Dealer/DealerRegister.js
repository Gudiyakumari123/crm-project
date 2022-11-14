import React, { Fragment, Component } from "react";

// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import CountryState from "../../../../shared/Reusable/CountryState";
import { Formik } from "formik";

// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";
import Country from "../../../../shared/Reusable/CountryState";
import PhoneInput from "../../../../shared/Reusable/PhoneInput";


const Category = [
  { value: "Company", label: "Company" },
  { value: "Freelancer", label: "Freelancer" },
];

const Installation = [
  { value: "Installation 1", label: "Installation 1" },
  { value: "Installation 2", label: "Installation 2" },
  { value: "Installation 3", label: "Installation 3" },
];

const Status = [
  { value: "Active", label: "Active" },
  { value: "Completed", label: "Completed" },
];

const Priority = [
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
  { value: "Low", label: "Low" },
];
class DealerRegister extends Component {
  constructor(props) {
    super(props);

    this.initialValues = {
      dates: "",
      companyName: "",
      contactPerson: "",
      nature: "",
      altContact: "",
      city: "",
      email: "",
      remarksDealer: "",
      address: "",
      remarksUser: "",
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
      errors.companyName = "Enter companyName";
    }

    if (!values.contactPerson) {
      errors.contactPerson = "Enter contactPerson";
    }
    if (!values.nature) {
      errors.nature = "Enter nature";
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

  handleToast = (values) => {
    if (!values) {
      toast.error("Please, Filled all mandatory fields !");
    }
    else {
      toast.success("Please, Filled all mandatory fields !");
    }
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
                onReset={this.handleReset}
                onSubmit={handleSubmit}
                className="form__content">
                <div className="title-display">
                  <div className="title"> Dealer Registration </div>
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
                        style={{ marginLeft: "-70px", width: "100%" }}
                      />
                    </div>

                    <div className="fields">
                      <Select
                        label="Category"
                        placeholder="Select Category No."
                        options={Category}
                        defaultValue={Category[0]}
                        className="select-control bill-select department-select"
                      />
                    </div>

                    <div className="fields">
                      <Input
                        type="text"
                        label="Company"
                        style={{
                          marginLeft: "-70px",
                          width: "100%",
                        }}
                        name="companyName"
                        id="companyName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.companyName}
                        isError
                      />
                      <span className="error-msg">{errors.companyName && touched.companyName && errors.companyName}</span>

                    </div>

                    <div className="fields">
                      <Input
                        type="text"
                        label="ContPerson"
                        style={{
                          marginLeft: "-70px",
                          width: "100%",
                        }}
                        name="contactPerson"
                        id="contactPerson"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.contactPerson}
                        isError
                      />
                      <span className="error-msg">{errors.contactPerson && touched.contactPerson && errors.contactPerson}</span>

                    </div>
                    <div className="fields">
                      <Input
                        type="text"
                        label="Nature"
                        style={{
                          marginLeft: "-70px",
                          width: "100%",
                        }}
                        name="nature"
                        id="nature"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.nature}
                        isError
                      />
                      <span className="error-msg">{errors.nature && touched.nature && errors.nature}</span>


                    </div>
                    <CountryState />
                    <div className="field__row">
                      <div className="fields">
                        <div className="input-fields">
                          <label htmlFor="" className="label">
                            Phone
                          </label>
                          <PhoneInput
                            style={{
                              marginLeft: "-50px",
                            }}
                            // value={this.state.phone}
                            name="phone"
                            className="form-control"
                            international
                            defaultCountry="IN"
                          />
                        </div>
                      </div>
                      <div className="fields">
                        <Input
                          type="text"
                          label="AltCont"
                          name="altContact"
                          // value={this.state.altContact}
                          // onChange={this.handleChange}
                          isError
                        />
                      </div>
                    </div>
                  </div>
                  {/* Left Side End */}

                  {/* Right Side Start */}
                  <div className="form__right">
                    <div className="fields">
                      <Input
                        type="text"
                        label="Area/City"
                        name="city"
                        id="city"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.city}
                        isError
                      />
                      <span className="error-msg">{errors.city && touched.city && errors.city}</span>

                    </div>

                    <div className="fields">
                      <Input
                        type="email"
                        label="Email"
                        name="email"
                        id="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        isError
                      />
                      <span className="error-msg">{errors.email && touched.email && errors.email}</span>

                    </div>

                    <div className="fields">
                      <TextArea
                        type="text"
                        label="Remarks"
                        rows="2"
                        name="remarksDealer"
                        placeholder="Remarks by Dealer"
                        // value={this.state.remarksDealer}
                        // onChange={this.handleChange}
                        style={{
                          marginLeft: "13px",
                        }}
                      />
                    </div>
                    <div className="fields">
                      <TextArea
                        type="text"
                        label="Address"
                        style={{
                          marginLeft: "10px",
                          width: "100%",
                        }}
                        name="address"
                        // value={this.state.address}
                        // onChange={this.handleChange}
                        isError
                      />
                    </div>

                    <div className="fields">
                      <TextArea
                        type="text"
                        label="Remarks"
                        rows="2"
                        name="remarksUser"
                        placeholder="Remarks by remarksUser"
                        // value={this.state.remarksUser}
                        // onChange={this.handleChange}
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
export default DealerRegister;