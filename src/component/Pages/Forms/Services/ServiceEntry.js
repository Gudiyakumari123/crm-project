import React, { Fragment, Component } from "react";
// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import PhoneAlt from "../../../../shared/Reusable/Phone&Alt";

// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";
import Country from "../../../../shared/Reusable/CountryState";
import PhoneInput from "../../../../shared/Reusable/PhoneInput";
import { Formik } from "formik";

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
class ServiceEntry extends Component {
  constructor(props) {
    super(props);
    this.initialValues = {
      customerId: "",
      companyName: "",
      city: "",
      software: "",
      details: "",
      date: "",
      remarks: "",
      dates: "",
    };
  }
  state = this.initialValues;

  handleReset = () => {
    this.setState(() => this.initialValues);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validate = (values) => {
    const errors = {};
    if (!values.customerId) {
      errors.customerId = " customer ID is Required";
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

    return errors;
  };
  handleSubmit = (values, setSubmitting) => {
    setTimeout(() => {
      // alert(JSON.stringify(values, null, 2));
      // alert("form submiited");
      if (!values) {
        toast.error("Form submitted");
      } else {
        toast.success("Form submitted");
      }
      setSubmitting(false);
    }, 400);
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
              isSubmitting,
              /* and other goodies */
            }) => (
              <form
                onReset={this.handleReset}
                onSubmit={handleSubmit}
                className="form__content"
              >
                <div className="title-display">
                  <div className="title"> Service Entry </div>
                </div>
                <div className="form__wrapper">
                  <div className="form__left">
                    <div className="fields">
                      <Input
                        type="date"
                        label="Date"
                        name="date"
                        // value={values.date}
                        // onChange={this.handleChange}
                        className="form-control marginleft_70"
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
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.customerId}
                          isError
                        />
                        <span className="error-msg">
                          {errors.customerId &&
                            touched.customerId &&
                            errors.customerId}
                        </span>
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
                        <span className="error-msg">
                          {errors.companyName &&
                            touched.companyName &&
                            errors.companyName}
                        </span>
                      </div>
                    </div>

                    <PhoneAlt />

                    <div className="fields">
                      <Select
                        label="Install"
                        placeholder="Select Installation No."
                        options={Installation}
                        defaultValue={Installation[0]}
                        className="select-control department-select"
                        isError
                      />
                    </div>
                    <div className="fields">
                      <Input
                        type="text"
                        label="Software"
                        className="form-control marginleft_70"
                        name="software"
                        id="software"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.software}
                        isError
                        errorMsg={errors.software}
                      />
                      <span className="error-msg">
                        {errors.software && touched.software && errors.software}
                      </span>
                    </div>

                    <div className="fields">
                      <Select
                        label="Category"
                        placeholder="Select Category No."
                        options={Category}
                        defaultValue={Category[0]}
                        className="select-control department-select"
                        isError
                      />
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
                        name="dates"
                        // value={this.state.dates}
                        // onChange={this.handleChange}

                        className="form-control date-style"
                      />
                    </div>
                    <div className="fields">
                      <TextArea
                        label="Remarks"
                        className="form-control right_13"
                        name="remarks"
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
                    onClick={isSubmitting}
                  >
                    Save
                  </Button>
                  <input
                    type="reset"
                    value="Clear"
                    className="btn btn-secondary"
                  />
                </div>
              </form>
            )}
          </Formik>
        </div>
        <ToastContainer />
        <Footer />
      </>
    );
  }
}
export default ServiceEntry;
