"use client";

import React from "react";
import "./confirmDeleteModal.css";

type ConfirmDeleteModalProps = {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemTitle?: string;
};

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isVisible,
  onClose,
  onConfirm,
  itemTitle,
}) => {
  if (!isVisible) return null;

  return (
    <div className="modal__container-confirm">
      <div className="modal__confirm">
        <button className="modal__close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal__container_confirm">
          <h3 className="modal__text_confirm">Confirm Deletion</h3>
          <p>
            Are you sure you want to delete{" "}
            <strong>{itemTitle ? `"${itemTitle}"` : "this item"}</strong>?
          </p>
        </div>
        <div className="modal-buttons">
          <button onClick={onConfirm} className="modal__button_confirm">
            Delete
          </button>
          <button onClick={onClose} className="modal__button_cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
