import React, { useState } from "react";
import { Spinner } from "reactstrap";

import ObjectCard from "./ObjectCard";
import TestComp from "./TestComp";
import ViewMorePagination from "./ViewMorePagination";

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

export default function AdvancedSearchPage() {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const requestLink = `?q=${values.title}${
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
      <form>
        <label>
          Title:
          <input
            type="text"
            value={values.title}
            name="title"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Department ID:
          <input
            type="text"
            value={values.department}
            name="department"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Object Name:
          <input
            type="text"
            value={values.objectName}
            name="objectName"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Culture:
          <input
            type="text"
            value={values.culture}
            name="culture"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Object Begin Date:
          <input
            type="text"
            value={values.beginDate}
            name="beginDate"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Object End Date:
          <input
            type="text"
            value={values.endDate}
            name="endDate"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            value={values.country}
            name="country"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Region:
          <input
            type="text"
            value={values.region}
            name="region"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Tag:
          <input
            type="text"
            value={values.tag}
            name="tag"
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
        <p>titre : {values.title}</p>
        <p>dpt : {values.department}</p>
        <p>objName : {values.objectName}</p>
        <p>culture : {values.culture}</p>
        <p>begin : {values.beginDate}</p>
        <p>country : {values.country}</p>
        <p>region : {values.region}</p>
        <p>end : {values.endDate}</p>
        <p>tag : {values.tag}</p>
      </form>
      <TestComp request={requestLink} />
    </>
  );
}
