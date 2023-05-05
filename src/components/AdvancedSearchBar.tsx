import { useState } from "react";

import "../styles/advanced_search.scss";

const initialValues = {
  title: "",
  department: "",
  objectName: "",
  culture: "",
  beginDate: "",
  endDate: "",
  country: "",
  region: "",
  tag: "",
};

export default function AdvancedSearchBar() {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const disabled =
    values.title.length > 0 ||
    values.department.length > 0 ||
    values.objectName.length > 0 ||
    values.culture.length > 0 ||
    values.beginDate.length > 0 ||
    values.endDate.length > 0 ||
    values.country.length > 0 ||
    values.region.length > 0 ||
    values.tag.length > 0;

  const requestLink = `/search/${values.title}${
    values.title == "" ? "" : "&title=" + values.title
  }${values.department == "" ? "" : "&departmentId=" + values.department}${
    values.objectName == "" ? "" : "&objectName=" + values.objectName
  }${values.culture == "" ? "" : "&culture=" + values.culture}${
    values.beginDate == "" ? "" : "&beginDate=" + values.beginDate
  }${values.endDate == "" ? "" : "&endDate=" + values.endDate}${
    values.country == "" ? "" : "&country=" + values.country
  }${values.region == "" ? "" : "&region=" + values.region}${
    values.tag == "" ? "" : "&tag=" + values.tag
  }`;

  return (
    <>
      <form className="form-container" action={requestLink}>
        <label className="label-container">
          Title:
          <input
            className="input-container"
            type="text"
            value={values.title}
            name="title"
            onChange={handleInputChange}
          />
        </label>
        <label className="label-container">
          Department ID:
          <input
            className="input-container"
            type="text"
            value={values.department}
            name="department"
            onChange={handleInputChange}
          />
        </label>
        <label className="label-container">
          Object Name:
          <input
            className="input-container"
            type="text"
            value={values.objectName}
            name="objectName"
            onChange={handleInputChange}
          />
        </label>
        <label className="label-container">
          Culture:
          <input
            className="input-container"
            type="text"
            value={values.culture}
            name="culture"
            onChange={handleInputChange}
          />
        </label>
        <label className="label-container">
          Object Begin Date:
          <input
            className="input-container"
            type="text"
            value={values.beginDate}
            name="beginDate"
            onChange={handleInputChange}
          />
        </label>
        <label className="label-container">
          Object End Date:
          <input
            className="input-container"
            type="text"
            value={values.endDate}
            name="endDate"
            onChange={handleInputChange}
          />
        </label>
        <label className="label-container">
          Country:
          <input
            className="input-container"
            type="text"
            value={values.country}
            name="country"
            onChange={handleInputChange}
          />
        </label>
        <label className="label-container">
          Region:
          <input
            className="input-container"
            type="text"
            value={values.region}
            name="region"
            onChange={handleInputChange}
          />
        </label>
        <label className="label-container">
          Tag:
          <input
            className="input-container"
            type="text"
            value={values.tag}
            name="tag"
            onChange={handleInputChange}
          />
        </label>
        <button className="button-style-nav" type="submit" disabled={!disabled}>
          Submit
        </button>
      </form>
    </>
  );
}
