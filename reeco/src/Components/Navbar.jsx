// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"
const Navbar = () => {
  return (
    <NavDiv>
      <div className="navbar-container">
        <div className="logo">
          <h1>Reeco</h1>
        </div>
        <div className="nav-links">
          <Link to="/">Store</Link>
          </div><div className="nav-links">
          <Link to="/orders">Orders</Link>
          </div><div className="nav-links">
          <Link to="/">Analytics</Link>
        </div>
        
         <div className="cart">
         🛒
         </div>
         <div className="user">
           Hello,Vishal
         </div>
        
      </div>
    </NavDiv>
  );
};

export default Navbar;

const NavDiv = styled.div`
/* background-color:green;
 */

  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size:25px;
    padding: 20px;
    background-color: #026c0adf; /* Adjust color as needed */
    color: white; /* Adjust color as needed */
  }

  .logo {
    h1 {
      margin: 0;
      font-size: 2rem;
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