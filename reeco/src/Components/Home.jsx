import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <StyledHomePage>
      <div className="header">
        <h1>Welcome to Reeco</h1>
      </div>
      <div className="main-content">
         
        <p className="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="footer">
        <p>Contact us: contact@reeco.com</p>
      </div>
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div`
  /* Styles for the entire homepage */

  background-color: #f2f2f2;
  padding: 20px;

  .header {
    /* Styles for the header section */
    text-align: center;
    margin-bottom: 20px;

    h1 {
      font-size: 36px;
      color: #333;
    }
  }

  .main-content {
    /* Styles for the main content section */
    text-align: center;

    .intro-text {
      font-size: 18px;
      color: #555;
      margin-bottom: 20px;
    }

    .cta-button {
      background-color: #007bff;
      color: #fff;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      border-radius: 4px;
    }
  }

  .footer {
    /* Styles for the footer section */
    text-align: center;
    margin-top: 20px;
    color: #777;
  }
`;

export default Home;
