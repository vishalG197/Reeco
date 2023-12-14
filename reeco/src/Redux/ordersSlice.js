// redux/ordersSlice.js
import { createSlice } from '@reduxjs/toolkit';
import mockData from '../Utils/data';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    products: mockData.products,
  },
  reducers: {
    approveProduct: (state, action) => {
      // Logic to mark product as approved
    },
    markMissing: (state, action) => {
      // Logic to mark product as missing
    },
    updateProduct: (state, action) => {
      // Logic to update product details (optional)
    },
  },
});

export const { approveProduct, markMissing, updateProduct } = ordersSlice.actions;

export default ordersSlice.reducer;
