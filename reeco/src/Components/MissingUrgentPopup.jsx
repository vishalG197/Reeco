import React, { useState } from 'react';
import styled from 'styled-components';
const MissingPopup = ({ onClose, onMarkMissing }) => {
  const [urgent, setUrgent] = useState(false);

  const handleMarkMissing = () => {
    // Add logic to mark product as missing or missing-urgent
    onMarkMissing(urgent);
    onClose();
  };


  return (
    <PopupOverlay>
      <PopupContent>
        <h2>Mark Product as Missing</h2>
        <label>
          Urgent:
          <input
            type="checkbox"
            checked={urgent}
            onChange={() => setUrgent(!urgent)}
          />
        </label>
        <button onClick={handleMarkMissing}>Mark as Missing</button>
        <button onClick={onClose}>Cancel</button>
      </PopupContent>
    </PopupOverlay>
  );
};

export default MissingPopup;

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
    margin-top: 5px;
  }

  button {
    margin-top: 10px;
    padding: 8px;
    cursor: pointer;
  }
`;
