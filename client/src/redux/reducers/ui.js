import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  modal: {
    isVisible: false,
    content: "login",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialValue,
  reducers: {
    setModal(state, action) {
      // state.loginVisible = action.payload;
      state.modal = {
        isVisible: action.payload.isVisible,
        content: action.payload.content,
      };
    },
    closeModal(state, action) {
      state.modal = {
        ...state,
        isVisible: false,
      };
    },
  },
});

export const { setModal, closeModal } = uiSlice.actions;
export default uiSlice.reducer;
