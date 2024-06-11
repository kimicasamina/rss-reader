const initialValue = {
  isMenuHidden: false,
};

const uiReducer = (ui = initialValue, action) => {
  switch (action.type) {
    case "SET_ISMENUHIDDEN": {
      return {
        ...ui,
        isMenuHidden: !ui.isMenuHidden,
      };
    }

    default:
      return ui;
  }
};
export default uiReducer;
