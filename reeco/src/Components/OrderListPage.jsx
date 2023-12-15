import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setOrders } from '../Redux/ordersSlice'; 
import mockData from '../Utils/data';

const OrderListPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);
console.log(orders);
  // useEffect(() => {
  //   // Dispatch an action to set the orders in the store
  //   dispatch(setOrders(mockData.orders));
  // }, [dispatch]);

  return (
    <OrderDiv>
      <div className="order">Orders</div>
      <div className="search">
        <span role="img" aria-label="Search">🔍</span>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="container">
        <table className="order-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Supplier</th>
              <th>Shipping Date</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.supplier}</td>
                <td>{order.shippingDate}</td>
                <td>{order.total}</td>
                <td>
                  <Link to={`/order/${order.id}`}>View Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </OrderDiv>
  );
};

export default OrderListPage;

const OrderDiv = styled.div`
  // Add your global styles here

  .order {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .search {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    input {
      margin-left: 10px;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
  }

  .container {
    // Add container styles

    .order-table {
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

      td {
        a {
          text-decoration: none;
          color: #007bff;
        }
      }
    }
  }
`;
