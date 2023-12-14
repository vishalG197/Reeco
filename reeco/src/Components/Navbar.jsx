// components/Navbar.js
import React from 'react';
import styled from "styled-component"
const Navbar = () => {
  return (
    <NavDiv>
      <div className="navbar-container">
        <div className="logo">
          <h1>Reeco</h1>
        </div>
        <div className="nav-links">
          <a href="/">Store</a>
          <a href="/orders">Orders</a>
          <a href="/analytics">Analytics</a>
        </div>
        <div>
         <div className="cart">
         🛒
         </div>
         <div className="user">
           Hello,Vishal
         </div>
        </div>
      </div>
    </NavDiv>
  );
};

export default Navbar;

const NavDiv = styled.div`
background-color:green;
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #333; /* Adjust color as needed */
    color: white; /* Adjust color as needed */
  }

  .logo {
    h1 {
      margin: 0;
      font-size: 1.5rem;
    }
  }

  .nav-links {
    a {
      color: white; /* Adjust color as needed */
      text-decoration: none;
      margin: 0 10px;
      font-size: 1rem;
    }
  }

  .user-cart-container {
    display: flex;
    align-items: center;

    .cart {
      font-size: 1.5rem;
      margin-right: 10px;
    }

    .user {
      font-size: 1rem;
    }
  }
`;