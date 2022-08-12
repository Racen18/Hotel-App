import { createStore } from "redux";
import reducer from "./reducers/FormReducer";

const store = createStore(reducer);

export default store;
