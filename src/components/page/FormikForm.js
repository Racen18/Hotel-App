import { Formik, Form } from "formik";
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

function FormikForm() {
  const [sgst, setSGST] = useState(0);
  const [cgst, setCGST] = useState(0);
  const [taxType, setTaxType] = useState("");
  const [basePrice, setBasePrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [value, setValue] = useState([[]]);

  useEffect(() => {
    handleTotalAmount();
  }, [basePrice]);

  const handleVariant = () => {
    const multipleVariants = [...value, []];
    setValue(multipleVariants);
  };

  const handleDelete = (i) => {
    const deleteVariant = [...value];
    deleteVariant.splice(i, 1);
    setValue(deleteVariant);
  };

  const handleGST = (value) => {
    setBasePrice(value);
    const GST = (sgst + cgst) / 2;
    if (taxType === "Inclusive") {
      const totalAmount = (finalPrice * GST) / (100 + GST);
      setTax(totalAmount);
    } else if (taxType === "Exclusive") {
      const totalAmount = (value * GST) / 100;
      setTax(totalAmount);
    } else {
      setTax(0);
    }
  };

  const handleTotalAmount = (value) => {
    if (value) {
      setFinalPrice(value);
    } else {
      const totalSum = basePrice + tax;
      setFinalPrice(totalSum);
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Formik
      initialValues={{
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
      }}
      onSubmit={(values) => {
        createData(values);
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
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
                    onChange={formik.handleChange}
                    borderLeftRadius={"0"}
                    borderLeft={"1px solid #D1D1D1"}
                  />
                </InputGroup>
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
                  <InputLeftAddon
                    children={"Max order quantity"}
                    bg={"white"}
                  />
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
                    value={formik.values.taxType}
                    onInput={(e) => setTaxType(e.target.value)}
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
                    value={formik.values.sgst}
                    disabled={taxType === "Not applicable"}
                    onInput={(e) => setSGST(parseInt(e.target.value))}
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
                  value={sgst}
                  disabled={taxType === "Not applicable"}
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
                    disabled={taxType === "Not applicable"}
                    value={formik.values.cgst}
                    onInput={(e) => setCGST(parseInt(e.target.value))}
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
                  value={cgst}
                  disabled={taxType === "Not applicable"}
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
                        onInput={(e) => handleGST(parseInt(e.target.value))}
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
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
