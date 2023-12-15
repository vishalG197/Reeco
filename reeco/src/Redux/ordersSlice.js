import { createSlice } from '@reduxjs/toolkit';
import mockData from '../Utils/data';
const initialState = {
  orders: mockData.orders, // Initial state, can be populated with data from an API or a mock file
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateProduct: (state, action) => {
      const { orderId, productId, updates } = action.payload;
      const orderIndex = state.orders.findIndex((order) => order.id === orderId);
      const productIndex = state.orders[orderIndex].products.findIndex(
        (product) => product.id === productId
      );

      state.orders[orderIndex].products[productIndex] = {
        ...state.orders[orderIndex].products[productIndex],
        ...updates,
      };
    },
    markProductMissing: (state, action) => {
      const { orderId, productId, urgent } = action.payload;
      const orderIndex = state.orders.findIndex((order) => order.id === orderId);
      const productIndex = state.orders[orderIndex].products.findIndex(
        (product) => product.id === productId
      );

      state.orders[orderIndex].products[productIndex].status = `Missing${urgent ? ' - Urgent' : ''}`;
    },
    setOrders: (state, action) => {
      console.log(action.payload)
      state.orders = action.payload;
    },
    // Add other actions as needed
  },
});

export const { updateProduct, markProductMissing ,setOrders} = orderSlice.actions;
export default orderSlice.reducer;
