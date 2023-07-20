import React from "react";
import "../styles/CreationModal.scss";

function CreationModal() {
  return (
    <div className="creation-modal-container">
      <div className="creation-modal-list">
        <h2>
          Contenu en cours de création,
          <br /> merci pour votre patience !
        </h2>
        <i className="fi fi-rr-hourglass-end" />
      </div>
    </div>
  );
}

export default CreationModal;
