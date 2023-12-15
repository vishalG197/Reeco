import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateProduct, markProductMissing } from '../Redux/ordersSlice'; 
import mockData from '../Utils/data';
import EditPopup from './EditPopup';
import MissingPopup from './MissingUrgentPopup';
import img from "../images/Apple.png"
const MainOrderPage = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.orders.orders[0]); // Assuming you are displaying details for the first order
  console.log(order)
  const [showEditPopup, setShowEditPopup] = useState(null);
  const [showMissingPopup, setShowMissingPopup] = useState(null);

  const handleMarkMissingPopup = (productId, urgent) => {
    setShowMissingPopup({ productId, urgent });
  };
  const handleEdit = (productId) => {
    setShowEditPopup(productId);
  };
  const handleMarkMissingProduct = (productId, urgent) => {
    const status = urgent ? 'Missing – Urgent' : 'Missing';
    dispatch(updateProduct({ orderId: order.id, productId, updates: { status } }));
    setShowMissingPopup(null);
  };

  const handleUpdateProduct = (productId, updates) => {
    // Logic to update the product
    // Dispatch the updateProduct action
    dispatch(updateProduct({ orderId: order.id, productId, updates }));
    setShowEditPopup(null);
  };
  const handleApprove = (productId) => {
    dispatch(updateProduct({ orderId: order.id, productId, updates: { status: 'Approved' } }));
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
              <th>Image</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {order.products?.map((product) => (
              <tr key={product.id}>
                <td>
                  <img src={img} alt={"Apple"} style={{ width: '50px', height: '50px' }} />
                </td>
                <td>{product.productName}</td>
                <td>{product.brand}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.total}</td>
                <td >
                  <button style={{ backgroundColor: product.status === 'Approved' ? 'green' :
                product.status === 'Missing'?"#db3b3b" :
                product.status === 'Missing – Urgent'?"red":'white',
                fontSize:"20px",
                fontWeight:"bold",
                color:product.status === 'Approved' ? 'white' :
                product.status === 'Missing'?"white" :
                product.status === 'Missing – Urgent'?"white":'black',
                 padding:'10px',
                 borderRadius:"10px"
                }}> {product.status}</button>
                 
                </td>
                <td>
                  <button onClick={() => handleApprove(product.id)}
                  style={{ backgroundColor: product.status === 'Approved' ? 'green' 
                  :'white',
                  fontSize:"20px",
                  fontWeight:"bold",
                  color:product.status === 'Approved' ? 'white':'black',
                   padding:'10px',
                   borderRadius:"10px"
                  }}
                  
                  >✓</button>
                  <button onClick={() => handleMarkMissingPopup(product.id, false)}
                  style={{ backgroundColor: 
                  product.status === 'Missing'?"#db3b3b" :
                  product.status === 'Missing – Urgent'?"red":'white',
                  fontSize:"20px",
                  fontWeight:"bold",
                  color:
                  product.status === 'Missing'?"white" :
                  product.status === 'Missing – Urgent'?"white":'black',
                   padding:'10px',
                   borderRadius:"10px"
                  }}
                  >X</button>
                  {/* <button onClick={() => handleMarkMissingPopup(product.id, true)}>X </button> */}
                  <button onClick={() => handleEdit(product.id)}
                     style={{ 
                      backgroundColor:"white",
                      fontSize:"20px",
                      fontWeight:"bold",
                      padding:'10px',
                     borderRadius:"10px"}}
                  >Edit</button>
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
  .detail {
    padding:20px;
    border-radius:10px;
    /* padding-right:"20px"; */
    text-align:center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   }
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
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
    text-align:center;
    h2 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
td {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
      th,
      td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }

      th {
        text-align :center;
        background-color: #f2f2f2;
        font-size:20px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      }

      button {
        border:"0px solid white";
        margin-right: 5px;
        cursor: pointer;
        
      }
    }
  }
`;
