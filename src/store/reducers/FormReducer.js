import { combineReducers } from "redux";

const FormReducer = async (state = {}, action) => {
  switch (action.type) {
    case "CREATE_DATA":
      return state = action.payload

    default:
      return state;
  }
};

const reducer = combineReducers({
  formReducer: FormReducer,
});

export default reducer;
