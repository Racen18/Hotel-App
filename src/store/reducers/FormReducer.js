import axios from "axios";
import { combineReducers } from "redux";

const FormReducer = async (state = {}, action) => {
  switch (action.type) {
    case "CREATE_DATA":
      const url = "";
      const data = await axios.post(url, action.payload);
      return data;
  }

  return state;
};

const reducer = combineReducers({
  formReducer: FormReducer,
});

export default reducer;
