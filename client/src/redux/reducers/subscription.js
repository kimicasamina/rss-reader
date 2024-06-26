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

const initialValue = [
  {
    id: null,
    category: "",
    feed: [],
    user: null,
  },
];

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
      return [...state, action.payload];
    },
    deleteSub(state, action) {
      const subCopy = [...state];
      console.log("REDUCER payload", action.payload);
      const newSub = subCopy.filter((sub) => sub._id !== action.payload);
      return [...newSub];
    },
    updateSubs(state, action) {
      const subCopy = [...state];
      const newSub = subCopy.map((s) => {
        if (s._id === action.payload._id) {
          console.log("New", s);
          return action.payload;
        }
        return s;
      });

      return [...newSub];
    },
  },
});

export const { addSub, setSubs, deleteSub, updateSubs } =
  subscriptionSlice.actions;
export default subscriptionSlice.reducer;
