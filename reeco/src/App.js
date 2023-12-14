// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import OrderMainPage from './Components/OrderMainPage';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar/>
        <OrderMainPage />
      </div>
    </Provider>
  );
}

export default App;
