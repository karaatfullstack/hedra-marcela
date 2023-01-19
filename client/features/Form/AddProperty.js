import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProperty } from "../property/propertiesSlice";

const AddPropertyForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  const [totalUnits, setTotalUnits] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addProperty({ name, address, yearBuilt, totalUnits, description })
    );
    setName("");
    setAddress("");
    setYearBuilt("");
    setTotalUnits("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="address">Address</label>
      <input
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <label htmlFor="yearBuilt">Year Built</label>
      <input
        name="yearBuilt"
        value={yearBuilt}
        onChange={(e) => setYearBuilt(e.target.value)}
      />
      <label htmlFor="totalUnits">Total Units</label>
      <input
        name="totalUnits"
        value={totalUnits}
        onChange={(e) => setTotalUnits(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <span></span>
        <button type="submit" className="button-34">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddPropertyForm;
