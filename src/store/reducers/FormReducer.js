import { combineReducers } from "redux";

const initialState = {
  itemName: "",
  category: "",
  subCategory: "",
  unit: "",
  netWeight: 0,
  maxOrderQuantity: 0,
  taxType: "",
  sgst: 0,
  cgst: 0,
  variantName: "",
  basePrice: 0,
  finalPrice: 0,
};

const FormReducer = async (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_DATA":
      return state = {
        itemName: action.payload.itemName,
        category: action.payload.category,
        subCategory: action.payload.subCategory,
        unit: action.payload.unit,
        netWeight: action.payload.netWeight,
        maxOrderQuantity: action.payload.maxOrderQuantity,
        taxType: action.payload.taxType,
        sgst: action.payload.sgst,
        cgst: action.payload.cgst,
        variantName: action.payload.variantName,
        basePrice: action.payload.basePrice,
        finalPrice: action.payload.finalPrice,
      };

    default:
      return state;
  }
};

const reducer = combineReducers({
  formReducer: FormReducer,
});

export default reducer;
