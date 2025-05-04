// formReducer.js
export const formInitialState = {
    username: "",
    email: "",
    password: ""
  };
  
  export const formReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_FIELD":
        return { ...state, [action.field]: action.value };
      case "RESET_FORM":
        return formInitialState;
      default:
        return state;
    }
  };
  