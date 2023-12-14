import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateProduct, markProductMissing } from '../redux/orderSlice'; // Adjust the import path based on your project structure
import mockData from '../Utils/data';
import EditPopup from './EditPopup';
import MissingPopup from './MissingUrgentPopup';

const MainOrderPage = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order.orders[0]); // Assuming you are displaying details for the first order

  const [editedProducts, setEditedProducts] = useState([]);
  const [showEditPopup, setShowEditPopup] = useState(null);
  const [showMissingPopup, setShowMissingPopup] = useState(null);

  const handleApprove = (productId) => {
    // Logic to mark product as approved
    // Dispatch the updateProduct action
    dispatch(updateProduct({ orderId: order.id, productId, updates: { status: 'Approved' } }));
  };

  const handleMarkMissing = (productId, urgent) => {
    // Logic to mark product as missing or missing-urgent
    // Dispatch the markProductMissing action
    dispatch(markProductMissing({ orderId: order.id, productId, urgent }));
  };

  const handleEdit = (productId) => {
    // Open the edit popup
    setShowEditPopup(productId);
  };

  const handleUpdateProduct = (productId, updates) => {
    // Logic to update the product
    // Dispatch the updateProduct action
    dispatch(updateProduct({ orderId: order.id, productId, updates }));
    setShowEditPopup(null);
  };

  const handleMarkMissingPopup = (productId, urgent) => {
    // Open the missing popup
    setShowMissingPopup({ productId, urgent });
  };

  const handleMarkMissingProduct = (productId, urgent) => {
    // Logic to mark product as missing or missing-urgent
    // Dispatch the markProductMissing action
    dispatch(markProductMissing({ orderId: order.id, productId, urgent }));
    setShowMissingPopup(null);
  };

  return (
    <MainOrderDiv>
      <div className="order-header">
        <h1>Order {order.id}</h1>
        <Link to="/orders">Back to Orders</Link>
      </div>
      <div className="order-details">
        <div className="detail">
          <strong>Supplier:</strong> {order.supplier}
        </div>
        <div className="detail">
          <strong>Shipping Date:</strong> {order.shippingDate}
        </div>
        <div className="detail">
          <strong>Total:</strong> {order.total}
        </div>
      </div>
      <div className="product-table">
        <h2>Product Details</h2>
        <table>
          <thead>
            <tr>
              {/* ... (same as before) ... */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {order.products.map((product) => (
              <tr key={product.id}>
                {/* ... (same as before) ... */}
                <td>
                  <button onClick={() => handleApprove(product.id)}>✓</button>
                  <button onClick={() => handleMarkMissingPopup(product.id, false)}>X</button>
                  <button onClick={() => handleMarkMissingPopup(product.id, true)}>X (Urgent)</button>
                  <button onClick={() => handleEdit(product.id)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showEditPopup && (
        <EditPopup
          onClose={() => setShowEditPopup(null)}
          onUpdate={(updates) => handleUpdateProduct(showEditPopup, updates)}
        />
      )}
      {showMissingPopup && (
        <MissingPopup
          onClose={() => setShowMissingPopup(null)}
          onMarkMissing={(urgent) => handleMarkMissingProduct(showMissingPopup.productId, urgent)}
        />
      )}
    </MainOrderDiv>
  );
};

export default MainOrderPage;

const MainOrderDiv = styled.div`
  // Add your global styles here

  .order-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h1 {
      font-size: 24px;
      font-weight: bold;
    }

    a {
      text-decoration: none;
      color: #007bff;
      font-size: 16px;
    }
  }

  .order-details {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;

    .detail {
      flex: 1;
      margin-right: 20px;

      strong {
        display: block;
        margin-bottom: 5px;
      }
    }
  }

  .product-table {
    h2 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    table {
      width: 100%;
      border-collapse: collapse;

      th,
      td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }

      th {
        background-color: #f2f2f2;
      }

      button {
        margin-right: 5px;
        cursor: pointer;
      }
    }
  }
`;
