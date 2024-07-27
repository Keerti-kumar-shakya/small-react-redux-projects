import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://www.course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true
}

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async(thunkAPI) => {
  try {

const response = await axios.get(url);
const data = response.data
return data;

  } catch (error) {
  return thunkAPI.rejectWithValue('something went wrong')
  }
})

const cartSlice = createSlice({
name : 'cart',
initialState,
reducers: {
  clearCart: (state, action) => {
  state.cartItems = [];
  },
  removeCart: (state, action) => {
    const productItem = action.payload;
    console.log(productItem);
  const removeItem = state.cartItems.filter((product) => product.id !==  productItem);
  state.cartItems = removeItem;
  },
  increase: (state, action) => {
   const increaseItem = action.payload;
   const increaseFind = state.cartItems.find((product) => product.id === increaseItem);
   increaseFind.amount = increaseFind.amount + 1;
  },

  decrease: (state, action) => {
    const increaseItem = action.payload;
    const increaseFind = state.cartItems.find((product) => product.id === increaseItem);
    increaseFind.amount = increaseFind.amount - 1;
   },

   cartTotal: (state) => {
    let amount = 0;
    let total = 0;

    state.cartItems.forEach((item) => {
      amount += item.amount;
      total += item.amount * item.price;
    })

    state.amount = amount;
    state.total = total;
   }
},

extraReducers:(builder) => {
  builder
  .addCase(getCartItems.pending, (state) => {
    state.isLoading = true;
  })
  .addCase(getCartItems.fulfilled, (state, action) => {
    state.isLoading = false;
    state.cartItems = action.payload;
  })
  .addCase(getCartItems.rejected, (state) => {
    state.isLoading = true;
  })
}
})

export default cartSlice.reducer; 

export const {clearCart, removeCart, increase, decrease, cartTotal} = cartSlice.actions;