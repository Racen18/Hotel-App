import axios from "axios";

const FormAction = async (formData, dispatch) => {
  const url = "https://62f9f223ffd7197707e25b78.mockapi.io/hotel/v1/formdata";
  await axios
    .post(url, formData)
    .then((res) => {
      dispatch({ type: "CREATE_DATA", payload: res.data });
    })
    .catch((err) => console.log(err));
};

export default FormAction;
