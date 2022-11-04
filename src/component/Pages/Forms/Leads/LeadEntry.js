// import React, { useState, useEffect } from "react";

// // components
// import Header from "../../../../shared/Header/Header";
// import SubHeader from "../../../../shared/SubHeader/SubHeader";
// import Footer from "../../../../shared/Footer/Footer";
// import { Button } from "react-bootstrap";

// // Reusable Component
// import Input from "../../../../shared/Reusable/Input";
// import Select from "../../../../shared/Reusable/Select";
// import TextArea from "../../../../shared/Reusable/TextArea";
// import Country from "../../../../shared/Reusable/CountryState";
// import Try from "../../../../shared/Reusable/Phone&Alt";

// // Constants
// import {
//   Source,
//   ConversionRatio,
//   Status,
// } from "../../../../data/crm-constants";

// const LeadEntry = (initialValue) => {
//   const [formValues, setFormValues] = useState({
//     category: "",
//   });

//   const Category1 = ["WonderPOS", "Healthy Fly", "Edu Fly"];
//   const Softwares = {
//     WonderPOS: [
//       "General Retail & Wholesale",
//       "Pharmacy Retail & Wholesale",
//       "Restaurant",
//       "Hypermarket",
//       "Supermarket",
//       "Department Stores",
//       "Kirana /Grocery Retail & Wholesale",
//       "FMCC Distribution",
//       "Jewellery Retail & Wholesale",
//       "Hallmarking Centre Software",
//       "Gas Agency",
//       "Readymade Retail & Wholesale",
//       "Textiles Retail & Wholesale",
//       "Fruits & Vegetables",
//       "Rice Traders / Mundy",
//       "Fancy Store",
//       "Footwear Shop",
//       "Mobile Sales & Service",
//       "Computer Sales & Service",
//       "Electrical Shop",
//       "Spa & Saloon",
//       "Laundry / Dry Clean",
//       "Books Shop",
//       "Florists",
//       "Home Decor & Furniture",
//       "Optical Shop",
//       "Stationery Shop",
//       "Toys & Gift Shop",
//       "Watches",
//       "Home Appliances",
//       "Surgical",
//       "Chemists & Druggists",
//       "Auto Parts",
//       "Fertilizer & Agro Products",
//       "Hardware Shop",
//       "Sports & Fitness",
//       "Tyre",
//       "Vessel Shop",
//       "Oil Shop",
//       "Paints Shop",
//       "Water Companies",
//       "Pizza Shop",
//       "Coffee Shop",
//       "Bakery",
//       "Sweet Shop",
//       "Bar /Pubs",
//       "Ice Cream Shop",
//       "Juice Shop",
//       "Tea Shop",
//       "Food Court",
//       "Auto Finance",
//       "Jewellery Loan",
//       "Crackers Shop",
//     ],
//     "Healthy Fly": [
//       "Hospital",
//       "Multi-Specialty Hospital",
//       "Clinic / Homecare",
//       "Ayurvedic Hospital",
//     ],
//     "Edu Fly": ["School", "College / University", "Study Centre / Institute"],
//   };

//   const [sourceOption, setSourceOption] = useState(false);
//   const [selectedState, setSelectedState] = useState("");
//   console.log("SelectState::", selectedState);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };
import React, { useState, useEffect, Fragment } from "react";

// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Button } from "react-bootstrap";
import DatePicker from "../../../../shared/Reusable/DatePicker";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import Country from "../../../../shared/Reusable/CountryState";
import Try from "../../../../shared/Reusable/Phone&Alt";

// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";
// Phone Number
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

// Constants
import {
  Source,
  ConversionRatio,
  Status,
} from "../../../../data/crm-constants";
const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

const swirl = cssTransition({
  enter: "swirl-in-fwd",
  exit: "swirl-out-bck",
});

const Category = [
  { value: "Service", label: "Service" },
  { value: "Updation", label: "Updation" },
];
const Priority = [
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
  { value: "Low", label: "Low" },
];

const Installation = [
  { value: "Installation 1", label: "Installation 1" },
  { value: "Installation 2", label: "Installation 2" },
  { value: "Installation 3", label: "Installation 3" },
];

// const Status = [
//   { value: "Active", label: "Active" },
//   { value: "Completed", label: "Completed" },
// ];

const LeadEntry = ({ initialValue }) => {
  // const [phone, setPhone] = useState(initialValue);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [paid, setPaid] = useState({});

  // Form Validations
  const [formValues, setFormValues] = useState({
    amount: "",
    date: "",
    customerId: "",
    companyName: "",
    phone: "",
    city: "",
    install: "",
    software: "",
    category: "",
    details: "",
    status: "",
    priority: "",
    remarks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const Category1 = ["WonderPOS", "Healthy Fly", "Edu Fly"];
  const Softwares = {
    WonderPOS: [
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

  const [sourceOption, setSourceOption] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  console.log("SelectState::", selectedState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
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

    if (!values.version) {
      errors.version = "Enter version";
    }
    if (!values.companyName) {
      errors.companyName = "Enter companyName";
    }
    if (!values.customerId) {
      errors.customerId = "Enter customerId";
    }
    if (!values.city) {
      errors.city = "Enter city";
    }
    if (!values.amount) {
      errors.amount = "Enter amount";
    }
    if (!values.grossAmt) {
      errors.grossAmt = "Enter grossAmt";
    }
    return errors;
  };

  console.log("FormValues::", formValues);

  function animateCss() {
    toast.dark("Hey 👋, Data Has Been Saved!", {
      transition: bounce,
    });
  }

  function refreshPage() {
    window.location.reload(false);
  }


  return (
    <>
      <Header />
      <SubHeader />
      <div className="form__container">
        <div className="form__content">
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
                  <select onChange={(e) => setSelectedState(e.target.value)}>
                    {Category1.map((values) => {
                      return <option>{values}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="fields">
                <div className="select">
                  <label htmlFor="" className="label">
                    Software
                  </label>
                  {selectedState && (
                    <select>
                      {Softwares[selectedState].map((values) => {
                        return <option>{values}</option>;
                      })}
                    </select>
                  )}
                </div>
              </div>
              <div className="field__row">
                <div className="fields">
                  <Input type="text" label="Company" name="company" isError />
                </div>
                <div className="fields">
                  <Input type="text" label="ContPerson" />
                </div>
              </div>
              <Try />
              <Country />
              <div className="fields">
                <Input
                  type="text"
                  label="Area/City"
                  style={{ width: "140%", marginLeft: "-21px" }}
                />
              </div>
              <div className="fields">
                <TextArea
                  type="text"
                  label="Address"
                  style={{ width: "140%", marginLeft: "-21px" }}
                />
              </div>
            </div>
            <div className="form__right">
              <div className="fields">
                <Input type="text" label="Email" name="email" readOnly={true} />
              </div>
              <div className="fields">
                <Select
                  label="Source"
                  options={Source}
                  className="select-control source-select"
                  defaultValue={Source[1]}
                  onChange={setSourceOption}
                />
              </div>
              {sourceOption.values === "Dealer" ? (
                <>
                  <div className="field__row">
                    <div className="fields">
                      <Input
                        label="DealerId"
                        type="number"
                        name="dealerId"
                        style={{ marginLeft: "42px" }}
                      />
                    </div>
                    <div className="fields">
                      <Input label="Name" type="email" name="dealerName" />
                    </div>
                  </div>
                </>
              ) : null}
              <div className="fields">
                <Input type="text" label="Others" />
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
                    className="select-control"
                    label="Ratio"
                    defaultValue={ConversionRatio[0]}
                  />
                </div>
              </div>
              <div className="fields">
                <Input type="date" label="Date" />
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
export default LeadEntry;
