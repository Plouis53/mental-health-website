"use client";

import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./confirmDeleteModal.css"; // Import the CSS file

interface ConfirmDeleteModalProps {
  show: boolean;
  handleCloseModal: () => void;
  handleDelete: () => void;
}

export default function ConfirmDeleteModal({
  show,
  handleCloseModal,
  handleDelete,
}: ConfirmDeleteModalProps) {
  return (
    <Modal show={show} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to delete this item? This action cannot be
          undone.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
