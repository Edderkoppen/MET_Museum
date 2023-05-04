import { Form, FormGroup, FormText, Input, Label } from "reactstrap";
import "../styles/AdvancedSearchPage.scss"
import Footer from "./Footer";
export default function AdvancedSearchPage() {
  return (
    <div className="conteneur-page">
    <form className="form-container">
      <label className="label-container">
        <p>Title:</p>
        <input className="input-container" type="text"/>
      </label>
      <label className="label-container">
        <p>Department:</p>
        <input className="input-container" type="text"/>
      </label>
      <label className="label-container">
        <p>Object Name:</p>
        <input className="input-container" type="text"/>
      </label>
      <label className="label-container">
        <p>Culture:</p>
        <input className="input-container" type="text"/>
      </label>
      <label className="label-container">
        <p>Object Begin Date:</p>
        <input className="input-container" type="text"/>
      </label>
      <label className="label-container">
        <p>Object End Date:</p>
        <input className="input-container" type="text"/>
      </label>
      <label className="label-container">
        <p>Country:</p>
        <input className="input-container" type="text"/>
      </label>
      <label className="label-container">
        <p>Region:</p>
        <input className="input-container" type="text"/>
      </label>
      <label className="label-container">
        <p>Tag:</p>
        <input className="input-container" type="text"/>
      </label>
      <div>
        <button className="btn btn-secondary" type="submit">
          Submit
        </button>
      </div>
    </form>
    </div>
  );
}
