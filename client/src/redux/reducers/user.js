const initialValue = {
  user: {
    _id: "",
    username: "",
    email: "",
  },
  subscriptions: [],
  category: [],
};

const uiReducer = (user = initialValue, action) => {
  switch (action.type) {
    case "SET_USER": {
      return {
        ...user,
        user: action.payload,
      };
    }

    default:
      return ui;
  }
};
export default uiReducer;
