import axios from "axios";

const FormAction = async (formData, dispatch) => {
  const url = "https://62f9f223ffd7197707e25b78.mockapi.io/hotel/v1/formdata";
  const data = await axios.post(url, {
    itemName: formData.itemName,
    category: formData.category,
    subCategory: formData.subCategory,
    unit: formData.unit,
    netWeight: formData.netWeight,
    maxOrderQuantity: formData.maxOrderQuantity,
    taxType: formData.taxType,
    sgst: formData.sgst,
    cgst: formData.cgst,
    variantName: formData.variantName,
    basePrice: formData.basePrice,
    finalPrice: formData.finalPrice,
  });
  dispatch({ type:'CREATE_DATA', payload: data.data })
};

export default FormAction;
