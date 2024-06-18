// const initialValue = [];
// // {
// //   title: "",
// //   rss_url: "",
// //   link: "",
// //   author: "",
// //   description: "",
// //   image_url: "",
// //   category: "",
// //   blogs: [],
// // },

// const subscriptionReducer = (subscription = initialValue, action) => {
//   switch (action.type) {
//     case "GET_ALL_SUBS": {
//       return action.payload;
//     }

//     case "ADD_SUB": {
//       return [...subscription, action.payload];
//     }

//     default:
//       return ui;
//   }
// };
// export default subscriptionReducer;

import { createSlice } from "@reduxjs/toolkit";

const initialValue = [{ name: "hackernoon" }, { name: "reddit" }];

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: initialValue,
  reducers: {
    setSubs(state, action) {
      console.log("payload:", action.payload);
      console.log("state:", state);
      return [...action.payload];
    },
    addSub(state, action) {
      return [...state, action.payload.newSub];
    },
  },
});

export const { addSub, setSubs } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
