import React, { useEffect, useState } from "react";
import {
  Center,
  Container,
  Grid,
  GridItem,
  Flex,
  Button,
  Text,
  Select,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import Configs from "../../data/GroupJSON";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

function FormikValidationForm() {
  const [value, setValue] = useState([[]]);

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
      createData(values);
    },
  });

  useEffect(() => {
    handleGST();
  }, [formik.values.basePrice, formik.values.finalPrice]);

  const handleGST = () => {
    const GST = (parseInt(formik.values.sgst) + parseInt(formik.values.cgst)) / 2;
    if (formik.values.taxType === "Inclusive") {
      const tax = formik.values.finalPrice - formik.values.finalPrice * (100 / (100 + GST));
      formik.values.basePrice = formik.values.finalPrice - tax;
    } else if (formik.values.taxType === "Exclusive") {
      const tax = (formik.values.basePrice * GST) / 100;
      formik.values.finalPrice = formik.values.basePrice + tax;
    } else {
      formik.values.finalPrice = formik.values.basePrice;
    }
  };

  const createData = async (values) => {
    const url =
      "https://crudcrud.com/api/0db8e7d64d4b44269105e3243a7f706e/product";
    await axios
      .post(url, {
        itemName: values.itemName,
        category: values.category,
        subCategory: values.subCategory,
        unit: values.unit,
        netWeight: values.netWeight,
        maxOrderQuantity: values.maxOrderQuantity,
        taxType: values.taxType,
        sgst: values.sgst,
        cgst: values.cgst,
        variantName: values.variantName,
        basePrice: values.basePrice,
        finalPrice: values.finalPrice,
      })
      .then((res) => {
        console.log("res", res);
        alert("The data has been submitted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleVariant = () => {
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
          <Text fontSize={"2xl"} paddingY={"10px"}>
            Master rate card form
          </Text>
        </Center>
        <Text fontSize={"20px"} paddingY={"10px"}>
          Item details
        </Text>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
          gap={"3"}
        >
          <GridItem>
            <InputGroup>
              <InputLeftAddon children={"Item name"} bg={"white"} />
              <Input
                name="itemName"
                value={formik.values.itemName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
              />
            </InputGroup>
            {formik.touched.itemName && formik.errors.itemName ? (
              <p style={{ color: "red" }}>{formik.errors.itemName}</p>
            ) : null}
          </GridItem>
        </Grid>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
          gap={"3"}
          my={"20px"}
        >
          <GridItem>
            <InputGroup>
              <InputLeftAddon children={"Category"} bg={"white"} />
              <Select
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
                placeholder={"--"}
              >
                {Configs.categoryConfig.map((data, index) => (
                  <option key={index}>{data.name}</option>
                ))}
              </Select>
            </InputGroup>
            {formik.touched.category && formik.errors.category ? (
              <p style={{ color: "red" }}>{formik.errors.category}</p>
            ) : null}
          </GridItem>
          <GridItem>
            <InputGroup>
              <InputLeftAddon children={"Sub category"} bg={"white"} />
              <Select
                name="subCategory"
                value={formik.values.subCategory}
                onChange={formik.handleChange}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
                placeholder={"--"}
              >
                {Configs.subCategoryConfig.map((data, index) => (
                  <option key={index}>{data.name}</option>
                ))}
              </Select>
            </InputGroup>
          </GridItem>
        </Grid>
        <Grid
          templateColumns={{ base: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}
          gap={"3"}
          my={"20px"}
        >
          <GridItem colSpan={1}>
            <InputGroup>
              <InputLeftAddon children={"Units"} bg={"white"} />
              <Select
                name="unit"
                placeholder="Select"
                value={formik.values.unit}
                onChange={formik.handleChange}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
              >
                {Configs.units.map((data, index) => (
                  <option key={index}>{data.name}</option>
                ))}
              </Select>
            </InputGroup>
          </GridItem>
          <GridItem colSpan={1}>
            <InputGroup>
              <InputLeftAddon children={"Net wt."} bg={"white"} />
              <Input
                name="netWeight"
                value={formik.values.netWeight}
                onChange={formik.handleChange}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
                placeholder={"0000"}
              />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={2}>
            <InputGroup>
              <InputLeftAddon children={"Max order quantity"} bg={"white"} />
              <Input
                name="maxOrderQuantity"
                value={formik.values.maxOrderQuantity}
                onChange={formik.handleChange}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
                placeholder={"--"}
              />
            </InputGroup>
          </GridItem>
        </Grid>
        <Text fontSize={"20px"} paddingY={"10px"}>
          Price details
        </Text>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(8,1fr)" }}
          gap={"3"}
        >
          <GridItem colSpan={3}>
            <Text fontWeight={"bold"}>Taxes</Text>
            <InputGroup>
              <InputLeftAddon children={"Tax type *"} bg={"white"} />
              <Select
                name="taxType"
                placeholder="Select"
                value={formik.values.taxType}
                onChange={formik.handleChange}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
              >
                {Configs.taxTypes.map((data, index) => (
                  <option key={index}>{data.name}</option>
                ))}
              </Select>
            </InputGroup>
          </GridItem>
        </Grid>
        <Grid
          templateColumns={{ base: "repeat(4,1fr)", lg: "repeat(8,1fr)" }}
          gap={"3"}
          my={"20px"}
        >
          <GridItem colSpan={3}>
            <Text fontWeight={"bold"}>Code</Text>
            <InputGroup>
              <InputLeftAddon children={"SGST"} bg={"white"} />
              <Select
                name="sgst"
                placeholder="Select"
                value={formik.values.sgst}
                disabled={formik.values.taxType === "Not applicable"}
                onChange={formik.handleChange}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
              >
                {Configs.gstPercentage.map((data, index) => (
                  <option key={index}>{data.name}</option>
                ))}
              </Select>
            </InputGroup>
          </GridItem>
          <GridItem>
            <Text fontWeight={"bold"}>Value</Text>
            <Input
              value={formik.values.sgst}
              disabled={formik.values.taxType === "Not applicable"}
              borderLeft={"1px solid #D1D1D1"}
              placeholder={"00%"}
            />
          </GridItem>
        </Grid>
        <Grid
          templateColumns={{ base: "repeat(4,1fr)", lg: "repeat(8,1fr)" }}
          gap={"3"}
          my={"20px"}
        >
          <GridItem colSpan={3}>
            <InputGroup>
              <InputLeftAddon children={"CGST"} bg={"white"} />
              <Select
                name="cgst"
                placeholder="Select"
                disabled={formik.values.taxType === "Not applicable"}
                value={formik.values.cgst}
                onChange={formik.handleChange}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
              >
                {Configs.gstPercentage.map((data, index) => (
                  <option key={index}>{data.name}</option>
                ))}
              </Select>
            </InputGroup>
          </GridItem>
          <GridItem>
            <Input
              value={formik.values.cgst}
              disabled={formik.values.taxType === "Not applicable"}
              borderLeft={"1px solid #D1D1D1"}
              placeholder={"00%"}
            />
          </GridItem>
        </Grid>
        <Text fontWeight={"bold"}>Variants (if any)</Text>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(4,1fr)" }}
          gap={"3"}
        >
          {value.map((data, i) => (
            <>
              <GridItem colSpan={2}>
                <InputGroup>
                  <InputLeftAddon children={"Variant"} bg={"white"} />
                  <Input
                    name="variantName"
                    value={formik.values.variantName}
                    onChange={formik.handleChange}
                    borderLeftRadius={"0"}
                    borderLeft={"1px solid #D1D1D1"}
                    placeholder={"--"}
                  />
                </InputGroup>
              </GridItem>
              <GridItem colSpan={1}>
                <InputGroup>
                  <InputLeftAddon children={"Base price"} bg={"white"} />
                  <Input
                    name="basePrice"
                    color={'red'}
                    disabled={formik.values.taxType === "Inclusive" || formik.values.taxType === ""}
                    value={formik.values.basePrice}
                    onChange={formik.handleChange}
                    borderLeftRadius={"0"}
                    borderLeft={"1px solid #D1D1D1"}
                    placeholder={"--"}
                  />
                </InputGroup>
              </GridItem>
              <GridItem colSpan={1}>
                <Flex>
                  <InputGroup>
                    <InputLeftAddon children={"Final price"} bg={"white"} />
                    <Input
                      name="finalPrice"
                      color={'red'}
                      disabled={formik.values.taxType !== "Inclusive"}
                      value={formik.values.finalPrice}
                      onChange={formik.handleChange}
                      borderLeftRadius={"0"}
                      borderLeft={"1px solid #D1D1D1"}
                      placeholder={"--"}
                    />
                  </InputGroup>
                  <Button
                    onClick={handleDelete}
                    color={"#18B83B"}
                    border={"1px solid #18B83B"}
                    bg={"#FCFCFC"}
                  >
                    X
                  </Button>
                </Flex>
              </GridItem>
            </>
          ))}
        </Grid>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(8,1fr)" }}
          gap={"3"}
          my={"20px"}
        >
          <GridItem colSpan={7}></GridItem>
          <GridItem colSpan={1}>
            <Button
              onClick={handleVariant}
              color={"#18B83B"}
              border={"1px solid #18B83B"}
              bg={"#FCFCFC"}
            >
              Add variant
            </Button>
          </GridItem>
        </Grid>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(8,1fr)" }}
          gap={"3"}
        >
          <GridItem colSpan={6}></GridItem>
          <GridItem colSpan={2}>
            <Button
              type="submit"
              width={"100%"}
              color={"#FFFFFF"}
              bg={"#18B83B"}
            >
              Save item
            </Button>
          </GridItem>
        </Grid>
      </Container>
    </form>
  );
}

export default FormikValidationForm;
