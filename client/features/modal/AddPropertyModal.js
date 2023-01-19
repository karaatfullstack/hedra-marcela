import React from "react";
import AddPropertyForm from "../Form/AddProperty";

const AddPropertyModal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="button-34" onClick={() => closeModal(false)}>
            X
          </button>
        </div>
        <div className="modalTitle">
          <h2>Add New Property:</h2>
        </div>
        <div className="modalBody">
          <AddPropertyForm />
        </div>
      </div>
    </div>
  );
};

export default AddPropertyModal;
