import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false
}

const modalSlice = createSlice({
name: 'modal',
initialState,
reducers: {
modalCart: (state, action) => {
  state.isOpen = true;
},
modalBtn : (state) => {
  state.isOpen = false;
},

}
});

export const {modalCart, modalBtn} = modalSlice.actions;

export default modalSlice.reducer;