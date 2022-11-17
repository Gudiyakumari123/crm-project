import React from "react";
// Country State City
import { useFormik } from "formik";
import csc from "country-state-city";
import Select from "react-select";


const NationTry = ({ props, country, options, onChange }) => {
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

  console.log("Country::", values)

  return (
    <>
      <div className="input-fields">
        <label htmlFor="" className="label">
          Nationality
          {/* <div className="require"></div> */}
        </label>
        <Select
          id="country"
          name="country"
          className="react-select country-select1 "
          options={updatedCountries}
          value={values.country}
          onChange={(value) => {
            setFieldValue("country", value);
            setFieldValue("state", null);
            setFieldValue("city", null);
          }}
          {...props}
        />
      </div>
    </>
  );
}
export default NationTry;
