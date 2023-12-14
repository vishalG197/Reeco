import React, { useState } from 'react';
import styled from 'styled-components';

const EditPopup = ({ onClose, onUpdate }) => {
  const [editedPrice, setEditedPrice] = useState('');
  const [editedQuantity, setEditedQuantity] = useState('');
  const [selectedReason, setSelectedReason] = useState('');

  const handleUpdate = () => {
    // Add validation and update logic
    onUpdate({
      price: editedPrice,
      quantity: editedQuantity,
      reason: selectedReason,
    });
    onClose();
  };

  return (
    <PopupOverlay>
      <PopupContent>
        <h2>Edit Product</h2>
        <label>
          Price:
          <input
            type="number"
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={editedQuantity}
            onChange={(e) => setEditedQuantity(e.target.value)}
          />
        </label>
        <label>
          Reason:
          <input
            type="text"
            value={selectedReason}
            onChange={(e) => setSelectedReason(e.target.value)}
          />
        </label>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={onClose}>Cancel</button>
      </PopupContent>
    </PopupOverlay>
  );
};

export default EditPopup;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;

  h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    margin-top: 10px;
    padding: 8px;
    cursor: pointer;
  }
`;
