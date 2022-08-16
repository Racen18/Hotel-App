import React, { useEffect, useState } from "react";
import { Center, Container, Grid, GridItem } from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import FormAction from "../../store/actions/FormAction";
import CommonText from "../commons/Text";
import FormItemDetails from "./FormDetails/FormItemDetails";
import FormPriceDetails from "./FormDetails/FormPriceDetails";
import CommonButton from "../commons/Button";

function FormikValidationForm() {
  const [value, setValue] = useState([[]]);
  const state = useSelector((state) =>
    state.formReducer.then((res) => console.log("res", res))
  );
  const dispatch = useDispatch();

  const validate = Yup.object({
    itemName: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    subCategory: Yup.string().required("Required"),
    unit: Yup.string().required("Required"),
    netWeight: Yup.number().required("Required"),
    maxOrderQuantity: Yup.number().required("Required"),
    taxType: Yup.string().required("Required"),
    sgst: Yup.number(),
    cgst: Yup.number(),
    variantName: Yup.string().required("Required"),
    basePrice: Yup.number().required("Required"),
    finalPrice: Yup.number().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
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
    },
    validationSchema: validate,
    onSubmit: (values) => {
      dispatch(FormAction(values, dispatch));
    },
  });

  useEffect(() => {
    handleGST();
  }, [
    formik.values.basePrice,
    formik.values.finalPrice,
    formik.values.cgst,
    formik.values.sgst,
  ]);

  const handleGST = () => {
    const GST = parseInt(formik.values.sgst) + parseInt(formik.values.cgst);
    if (formik.values.taxType === "Inclusive") {
      const tax =
        formik.values.finalPrice -
        formik.values.finalPrice * (100 / (100 + GST));
      formik.values.basePrice = formik.values.finalPrice - tax;
    } else if (formik.values.taxType === "Exclusive") {
      const tax = (formik.values.basePrice * GST) / 100;
      formik.values.finalPrice =
        parseInt(formik.values.basePrice) + parseInt(tax);
    } else {
      formik.values.finalPrice = formik.values.basePrice;
    }
  };

  const handleVariant = (i) => {
    const multipleVariants = [...value, []];
    setValue(multipleVariants);
  };

  const handleDelete = (i) => {
    const deleteVariant = [...value];
    deleteVariant.splice(i, 1);
    setValue(deleteVariant);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Container maxW={"4xl"}>
        <Center>
          <CommonText
            fontSize={"2xl"}
            paddingY={"10px"}
            value={"Master rate card form"}
          />
        </Center>
        <FormItemDetails formik={formik} />
        <FormPriceDetails
          formik={formik}
          value={value}
          handleDelete={handleDelete}
          handleVariant={handleVariant}
        />
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(8,1fr)" }}
          gap={"3"}
        >
          <GridItem colSpan={6}></GridItem>
          <GridItem colSpan={2}>
            <CommonButton
              type={"submit"}
              value={"Save item"}
              width={"100%"}
              color={"#FFFFFF"}
              bg={"#18B83B"}
            />
          </GridItem>
        </Grid>
      </Container>
    </form>
  );
}

export default FormikValidationForm;
