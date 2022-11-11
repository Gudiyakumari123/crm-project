// import React, {Fragment, Component } from "react";

// // components
// import Header from "../../../../shared/Header/Header";
// import SubHeader from "../../../../shared/SubHeader/SubHeader";
// import Footer from "../../../../shared/Footer/Footer";
// import { Button } from "react-bootstrap";
// import { ToastContainer, toast } from 'react-toastify';


// // Reusable Component
// import Input from "../../../../shared/Reusable/Input";
// import Select from "../../../../shared/Reusable/Select";
// import TextArea from "../../../../shared/Reusable/TextArea";
// import Country from "../../../../shared/Reusable/CountryState";
// import PhoneInput from "../../../../shared/Reusable/PhoneInput";


// const Category = [
//   { value: "Company", label: "Company" },
//   { value: "Freelancer", label: "Freelancer" },
// ];

// const Installation = [
//   { value: "Installation 1", label: "Installation 1" },
//   { value: "Installation 2", label: "Installation 2" },
//   { value: "Installation 3", label: "Installation 3" },
// ];

// const Status = [
//   { value: "Active", label: "Active" },
//   { value: "Completed", label: "Completed" },
// ];

// const Priority = [
//   { value: "High", label: "High" },
//   { value: "Medium", label: "Medium" },
//   { value: "Low", label: "Low" },
// ];

// const regExp = RegExp(
//   /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
// )

// const formValid = ({ isError, ...rest }) => {
//   let isValid = false;
//   Object.values(isError).forEach(val => {
//       if (val.length > 0) {
//           isValid = false
//       } else {
//           isValid = true
//       }
//   });
//   Object.values(rest).forEach(val => {
//       if (val === null) {
//           isValid = false
//       } else {
//           isValid = true
//       }
//   });
//   return isValid;
// };

// class ReInstall extends Component {
//   constructor(props) {
//     super(props)
//   this.state = {
//     customerId: "",
//     companyName: "",
//     city: "",
//     software: "",
//     details: "",
//     date: "",
//     remarks: "",
//     dates: "",
//     isErrorr:{
//       customerId: "",
//       companyName: "",
//       city: "",
//     }
//   };
// }
//   state = this.initialState;

//   onSubmit = e => {
//     e.preventDefault();
//     if (formValid(this.state)) {
//         console.log(this.state)
//     } else {
//         console.log("Form is invalid!");
//     }
// };

// formValChange = (e) => {
//   e.preventDefault();
//   const { name, value } = e.target;
//   let isError = { ...this.state.isError };
//   switch (name) {
//       case "customerId":
//           isError.customerId =
//               value.length < 4 ? "Atleast 4 characaters required" : "";
//           break;
//       case "companyName":
//           isError.companyName = regExp.test(value)
//               ? ""
//               : "Email address is invalid";
//           break;
//       case "city":
//           isError.city =
//               value.length < 6 ? "Atleast 6 characaters required" : "";
//           break;
//       default:
//           break;
//   }
//   this.setState({
//       isError,
//       [name]: value
//   })
// };
// // dfghj

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.validate();

//       if (this.state.customerId === "" || this.state.companyName === "" || this.state.city === "" || this.state.software === "") {

//       toast.error("Please, Filled all mandatory fields !");
//     } else {
//       toast.success("Form Submitted!");
//     }

//     this.handleReset();
//   };

//   validate = () => {
//     let name = this.state.customerId;
//     let errors = {};
//     let isValid = true;

//     if (!this.state.customerId) {
//       isValid = false;
//       errors["name"] = "Enter Valid Value";
//     }
//     return isValid;
//   };
//   handleReset = () => {
//     this.setState(() => this.initialState);
//   };

//   handleSourceChange = (newValue) => {
//     this.setState({
//       sourceOption: newValue
//     })
//   }

//   handleSoftwareChange = (e) => {
//     this.setState({
//       ...this.state,
//       softwareOption: e.target.value
//     })
//     console.log("Value::", this.state.softwareOption)
//   }

//   render() {
//     const { isError } = this.state;
//     return (
//       <>
//         <Header />
//         <SubHeader />
//         <div className="form__container">
//         <form onSubmit={this.onSubmit} noValidate
//             onReset={this.handleReset}
//             className="form__content">
//             <div className="title-display">
//               <div className="title"> Service Entry </div>
//             </div>
//             <div className="form__wrapper">
//               <div className="form__left">
//                 <div className="fields">
//                   <Input
//                     type="date"
//                     label="Date"
//                     name="date"
//                     value={this.state.date}
//                     onChange={this.handleChange}
//                     style={{
//                       marginLeft: "-70px"
//                       , width: "100%"
//                     }}

//                   />
//                 </div>
//                 <div className="field__row">
//                   <div className="fields">
//                     <Input
//                       type="text"
//                       label="Cust Id"
//                       name="customerId"
//                       className={isError.name.length > 0 ? "is-invalid form-control" : "form-control"}
//                       // value={this.state.customerId}
//                       // onChange={this.handleChange}
//                       onChange={this.formValChange}

//                       isError
//                     />
//                     {isError.customerId.length > 0 && (
//                       <span className="invalid-feedback">{isError.customerId}</span>
//                   )}
//                   </div>
//                   <div className="fields">
//                     <Input
//                       type="text"
//                       label="Company"
//                       name="companyName"
//                       value={this.state.companyName}
//                       onChange={this.handleChange}

//                       isError
//                     />
//                   </div>
//                 </div>

//                 <div className="field__row">
//                   <div className="fields">
//                     <div className="input-fields">
//                       <label htmlFor="" className="label">
//                         Phone
//                       </label>
//                       <PhoneInput
//                         style={{
//                           marginLeft: "-45px",
//                         }}
//                         value={this.state.phone}
//                         name="phone"
//                         className="form-control"
//                         international
//                         defaultCountry="IN"
//                         onChange={this.handleChange}

//                       />
//                     </div>
//                   </div>
//                   <div className="fields">
//                     <Input
//                       type="text"
//                       label="City"
//                       name="city"
//                       value={this.state.city}
//                       onChange={this.handleChange}
//                       isError
//                     />
//                   </div>
//                 </div>

//                 <div className="fields">
//                   <Select
//                     label="Install"
//                     placeholder="Select Installation No."
//                     options={Installation}
//                     defaultValue={Installation[0]}
//                     className="select-control bill-select department-select"
//                     isError
//                   />
//                 </div>
//                 <div className="fields">
//                   <Input
//                     type="text"
//                     label="Software"
//                     style={{
//                       marginLeft: "-70px",
//                       width: "100%",
//                     }}
//                     name="software"
//                     value={this.state.software}
//                     onChange={this.handleChange}

//                     isError
//                   />
//                 </div>

//                 <div className="fields">
//                   <Select
//                     label="Category"
//                     placeholder="Select Category No."
//                     options={Category}
//                     defaultValue={Category[0]}
//                     className="select-control bill-select department-select"
//                     isError
//                   />
//                 </div>
//               </div>
//               {/* Left Side End */}
//               {/* Right Side Start */}
//               <div className="form__right">
//                 <div className="fields">
//                   <TextArea
//                     type="text"
//                     label="Details"
//                     rows="2"
//                     name="details"
//                     value={this.state.details}
//                     onChange={this.handleChange}

//                     style={{
//                       marginLeft: "13px",
//                     }}
//                   />
//                 </div>

//                 <div className="fields">
//                   <Select
//                     label="Status"
//                     options={Status}
//                     className="select-control source-select"
//                     defaultValue={Status[0]}
//                   />
//                 </div>
//                 <div className="fields">
//                   <Select
//                     label="Priority"
//                     options={Priority}
//                     className="select-control source-select"
//                     defaultValue={Priority[0]}
//                   />
//                 </div>
//                 <div className="fields">
//                   <Input
//                     type="date"
//                     label="Date"
//                     name="dates"
//                     value={this.state.dates}
//                     onChange={this.handleChange}

//                     style={{
//                       marginLeft: "12px"
//                       , width: "100%"
//                     }}

//                   />
//                 </div>
//                 <div className="fields">
//                   <TextArea
//                     label="Remarks"
//                     style={{ marginLeft: "15px" }}
//                     name="remarks"
//                     value={this.state.remarks}
//                     onChange={this.handleChange}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="btn__holder">
//               <Button
//                 type="submit"
//                 className="btn btn-primary"
//                 onClick={this.handleSubmit}
//               >
//                 Save
//               </Button>
//               <input type="reset" value="Clear"
//                 className="btn btn-secondary"
//               />

//             </div>
//           </form>
//         </div>
//         <ToastContainer />
//         <Footer />
//       </>
//     );
//   };
// };
// export default ReInstall;



import React, {Fragment, Component } from "react";

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
class ReInstall extends Component {
  initialState = {
    customerId: "",
    companyName: "",
    city: "",
    software: "",
    details: "",
    date: "",
    remarks: "",
    dates: "",
    error: "",
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

    if (this.state.customerId === "" || this.state.companyName === "" || this.state.city === "" || this.state.software === "") {
      toast.error("Please, Filled all mandatory fields !");
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

  handleSoftwareChange = (e) => {
    this.setState({
      ...this.state,
      softwareOption: e.target.value
    })
    console.log("Value::", this.state.softwareOption)
  }

  render() {

    return (
      <>
        <Header />
        <SubHeader />
        <div className="form__container">
          <form onReset={this.handleReset} className="form__content">
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
                    value={this.state.date}
                    onChange={this.handleChange}
                    style={{
                      marginLeft: "-70px",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="field__row">
                  <div className="fields">
                    <Input
                      type="text"
                      label="Cust Id"
                      name="customerId"
                      value={this.state.customerId}
                      onChange={this.handleChange}
                      isError
                    />
                    <Error className="error-msg" name="name" />
                  </div>
                  <div className="fields">
                    <Input
                      type="text"
                      label="Company"
                      name="companyName"
                      value={this.state.companyName}
                      onChange={this.handleChange}
                      isError
                    />
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
                          marginLeft: "-45px",
                        }}
                        value={this.state.phone}
                        name="phone"
                        className="form-control"
                        international
                        defaultCountry="IN"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="fields">
                    <Input
                      type="text"
                      label="City"
                      name="city"
                      value={this.state.city}
                      onChange={this.handleChange}
                      isError
                    />
                  </div>
                </div>

                <div className="fields">
                  <Select
                    label="Install"
                    placeholder="Select Installation No."
                    options={Installation}
                    defaultValue={Installation[0]}
                    className="select-control bill-select department-select"
                    isError
                  />
                </div>
                <div className="fields">
                  <Input
                    type="text"
                    label="Software"
                    style={{
                      marginLeft: "-70px",
                      width: "100%",
                    }}
                    name="software"
                    value={this.state.software}
                    onChange={this.handleChange}
                    isError
                  // errorMsg={formErrors.software}
                  />
                </div>

                <div className="fields">
                  <Select
                    label="Category"
                    placeholder="Select Category No."
                    options={Category}
                    defaultValue={Category[0]}
                    className="select-control bill-select department-select"
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
                    value={this.state.details}
                    onChange={this.handleChange}
                    style={{
                      marginLeft: "13px",
                    }}
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
                    value={this.state.dates}
                    onChange={this.handleChange}
                    style={{
                      marginLeft: "12px",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="fields">
                  <TextArea
                    label="Remarks"
                    style={{ marginLeft: "15px" }}
                    name="remarks"
                    value={this.state.remarks}
                    onChange={this.handleChange}
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
        <ToastContainer transition={bounce} />
        <Footer />
      </>
    );
  }
}
export default ServiceEntry;



// import React, { Component } from "react";
// // Reusable Component
// import Input from "../../../../shared/Reusable/Input";
// import Select from "../../../../shared/Reusable/Select";
// import TextArea from "../../../../shared/Reusable/TextArea";
// import Country from "../../../../shared/Reusable/CountryState";
// import PhoneInput from "../../../../shared/Reusable/PhoneInput";
// import classNames from 'classnames';

// const regExp = RegExp(
//     /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
// )

// const formValid = ({ isErrorr, ...rest }) => {
//     let isValid = false;
//     Object.values(isErrorr).forEach(val => {
//         if (val.length > 0) {
//             isValid = false
//         } else {
//             isValid = true
//         }
//     });
//     Object.values(rest).forEach(val => {
//         if (val === null) {
//             isValid = false
//         } else {
//             isValid = true
//         }
//     });
//     return isValid;
// };
// export default class ReInstall extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: '',
//             email: '',
//             password: '',
//             isErrorr: {
//                 name: '',
//                 email: '',
//                 password: ''
//             }
//         }
//     }

//     onSubmit = e => {
//         e.preventDefault();
//         if (formValid(this.state)) {
//             console.log(this.state)
//         } else {
//             console.log("Form is invalid!");
//         }
//     };

//     formValChange = e => {
//         e.preventDefault();
//         const { name, value } = e.target;
//         let isErrorr = { ...this.state.isErrorr };
//         switch (name) {
//             case "name":
//                 isErrorr.name =
//                     value.length < 4 ? "Atleast 4 characaters required" : "";
//                 break;
//             case "email":
//                 isErrorr.email = regExp.test(value)
//                     ? ""
//                     : "Email address is invalid";
//                 break;
//             case "password":
//                 isErrorr.password =
//                     value.length < 6 ? "Atleast 6 characaters required" : "";
//                 break;
//             default:
//                 break;
//         }
//         this.setState({
//             isErrorr,
//             [name]: value
//         })
//     };
//     render() {
//         const { isErrorr } = this.state;
//         return (
//             <form onSubmit={this.onSubmit} noValidate>
//                 <div className="fields">
//                     {/* <label>Name</label> */}
//                     <Input
//                         label="Name"
//                         type="text"
//                         className={isErrorr.name.length > 0 ? "is-invalid form-control" : "form-control"}
//                         name="name"
//                         onChange={this.formValChange}
//                     />
//                     {isErrorr.name.length > 0 && (
//                         <span className="invalid-feedback">{isErrorr.name}</span>
//                     )}
//                 </div>
//                 {/* <div className="fields">
//                     <Input
//                       type="text"
//                       label="Company"
//                       name="companyName"
//                       className={isErrorr.name.length > 0 ? "is-invalid form-control" : "form-control"}
//                       value={this.state.companyName}
//                       // onChange={this.handleChange}
//                       onChange={this.formValChange}


//                       // isErrorr
//                       {isErrorr.name.length > 0 && (
//                         <span className="invalid-feedback">{isErrorr.name}</span>
//                     )}
//                     />
//                   </div> */}

//                 <div className="form-group">
//                     {/* <label>Email</label> */}
//                     <input
//                         label="Email"
//                         type="email"
//                         className={isErrorr.email.length > 0 ? "is-invalid form-control" : "form-control"}
//                         name="email"
//                         onChange={this.formValChange}
//                     />
//                     {isErrorr.email.length > 0 && (
//                         <span className="invalid-feedback">{isErrorr.email}</span>
//                     )}
//                 </div>
//                 <div className="form-group">
//                     <label>Password</label>
//                     <input
//                         type="password"
//                         className={isErrorr.password.length > 0 ? "is-invalid form-control" : "form-control"}
//                         name="password"
//                         onChange={this.formValChange}
//                     />
//                     {isErrorr.password.length > 0 && (
//                         <span className="invalid-feedback">{isErrorr.password}</span>
//                     )}
//                 </div>
//                 <button type="submit" className="btn btn-block btn-danger">Create User</button>
//             </form>
//         );
//     }
// }
