import React from "react";
// Country State City
import { useFormik } from "formik";
import csc from "country-state-city";
import Select from "./Select";

const CountryTry = () => {
  const addressFromik = useFormik({
    initialValues: {
      country: "India",
      state: null,
      city: null,
    },
    onSubmit: (values) => console.log(JSON.stringify(values)),
  });

  const countries = csc.getAllCountries();

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }));
  const updatedStates = (countryId) =>
    csc
      .getStatesOfCountry(countryId)
      .map((state) => ({ label: state.name, value: state.id, ...state }));
  const updatedCities = (stateId) =>
    csc
      .getCitiesOfState(stateId)
      .map((city) => ({ label: city.name, value: city.id, ...city }));
  const { values, setFieldValue, setValues } = addressFromik;

  return (
    <>
      <div className="field__row">
        <div className="input-fields">
          <label htmlFor="" className="label">
            Country
          </label>
          <Select
            id="country"
            name="country"
            className="react-select country-select "
            options={updatedCountries}
            value={values.country}
            onChange={(value) => {
              setFieldValue("country", value);
              setFieldValue("state", null);
              setFieldValue("city", null);
            }}
          />
        </div>
        <div className="input-fields c">
          <label htmlFor="" className="label">
            State
          </label>
          <Select
            id="state"
            name="state"
            className="react-select state-select"
            options={updatedStates(
              values.country ? values.country.value : null
            )}
            value={values.state}
            onChange={(value) => {
              setValues({ state: value, city: null }, false);
            }}
          />
        </div>
      </div>
    </>
  );
};
export default CountryTry;
