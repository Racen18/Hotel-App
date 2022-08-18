import React, { useEffect, useState } from "react";
import { Box, Center, Container, Grid, GridItem } from "@chakra-ui/react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import FormAction from "../../store/actions/FormAction";
import CommonText from "../commons/Text";
import FormItemDetails from "./FormDetails/FormItemDetails";
import FormPriceDetails from "./FormDetails/FormPriceDetails";
import CommonButton from "../commons/Button";

function FormikValidationForm() {
  const [arrayElements, setArrayElements] = useState([
    { variantName: "", basePrice: 0, finalPrice: 0 },
  ]);
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
    items: Yup.array(),
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
      items: arrayElements,
    },
    validationSchema: validate,
    onSubmit: (values) => {
      dispatch(FormAction(values, dispatch));
    },
  });

  useEffect(() => {
    handleGST();
  }, [formik.values.items, formik.values.cgst, formik.values.sgst]);

  const handleGST = () => {
    const gst = parseInt(formik.values.sgst) + parseInt(formik.values.cgst);
    let tax = [];
    if (formik.values.taxType === "Inclusive") {
      formik.values.items.forEach((data, index) => {
        tax[index] = data.finalPrice - data.finalPrice * (100 / (100 + gst));
        data.basePrice = parseInt(data.finalPrice) - tax[index];
      });
    } else if (formik.values.taxType === "Exclusive") {
      formik.values.items.forEach((data, index) => {
        tax[index] = (parseInt(data.basePrice) * gst) / 100;
        data.finalPrice = parseInt(data.basePrice) + tax[index];
      });
    } else {
      formik.values.items.forEach((data, index) => {
        data.finalPrice = data.basePrice;
      });
    }
  };

  const handleAddVariant = () => {
    const multipleVariants = [
      ...formik.values.items,
      { variantName: "", basePrice: 0, finalPrice: 0 },
    ];
    formik.values.items = multipleVariants;
    setArrayElements(formik.values.items);
  };

  const handleDeleteVariant = (i) => {
    const deleteVariant = [...formik.values.items];
    deleteVariant.splice(i, 1);
    formik.values.items = deleteVariant;
    setArrayElements(formik.values.items);
  };

  return (
    <Box as={"form"} onSubmit={formik.handleSubmit}>
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
          handleDeleteVariant={handleDeleteVariant}
          handleAddVariant={handleAddVariant}
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
              color={"button.white"}
              bg={"#18B83B"}
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default FormikValidationForm;
