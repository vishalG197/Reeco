import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import OrderMainPage from "./Components/OrderMainPage";
import Navbar from "./Components/Navbar";
import OrderListPage from "./Components/OrderListPage";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<OrderListPage />} />
          <Route path="/order/:id" element={<OrderMainPage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
