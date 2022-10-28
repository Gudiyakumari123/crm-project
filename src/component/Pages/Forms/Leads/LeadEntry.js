import React, { useState } from "react";

// components
import Header from "../../../../shared/Header/Header";
import SubHeader from "../../../../shared/SubHeader/SubHeader";
import Footer from "../../../../shared/Footer/Footer";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

// Reusable Component
import Input from "../../../../shared/Reusable/Input";
import Select from "../../../../shared/Reusable/Select";
import TextArea from "../../../../shared/Reusable/TextArea";
import Country from "../HR/tryCountry";
import Try from "../HR/tryPhone";

// Constants
import {
  Source,
  Category,
  ConversionRatio,
  Status,
  WonderPOS,
  HealthFly,
  EduFly,
} from "../../../../data/crm-constants";

const LeadEntry = () => {
  const [sourceOption, setSourceOption] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSelectChange = () => {
    if (Category.value === "Wonder POS") {
      return WonderPOS;
    }
    if (Category.value === "Health Fly") {
      return HealthFly;
    }
    if (Category.value === "Edu Fly") {
      return EduFly;
    }
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
                <Select
                  label="Category"
                  options={Category}
                  className="select-control bill-select department-select"
                  defaultValue={Category[0]}
                />
              </div>
              <div className="fields">
                <Select
                  label="Software"
                  // options={handleSelectChange}
                  className="select-control bill-select department-select"
                  defaultValue={handleSelectChange[0]}
                />
              </div>
              <div className="field__row">
                <div className="fields">
                  <Input type="text" label="Company" />
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
