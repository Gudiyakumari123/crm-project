import React, { useState, useEffect } from "react";

// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Button } from "react-bootstrap";

// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";
import Country from "../../../../shared/Reusable/CountryState";
import Try from "../../../../shared/Reusable/tryPhone";

// Constants
import {
  Source,
  ConversionRatio,
  Status,
} from "../../../../data/crm-constants";

const LeadEntry = () => {
  const [formValues, setFormValues] = useState({
    category: "",
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
              {sourceOption.value === "Dealer" ? (
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
              // onClick={handleSubmit}
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
