import React, { useEffect, useState } from "react";
import { Center, Container, Grid, GridItem, Box } from "@chakra-ui/react";
import CommonButton from "./commons/Button";
import CommonText from "./commons/Text";
import CommonInput from "./commons/Input";
import CommonGroupSelect from "./commons/GroupSelect";
import CommonGroupInput from "./commons/GroupInput";
import Configs from "../data/GroupJSON";

function Form() {
  const [foodType, setFoodType] = useState("");
  const [taxType, setTaxType] = useState("");
  const [basePrice, setBasePrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const [sgst, setSGST] = useState(0);
  const [cgst, setCGST] = useState(0);

  useEffect(() => {
    handleTotalAmount();
  }, [basePrice]);

  const handleTaxType = (value) => {
    setTaxType(value);
  };

  const handleGST = (value) => {
    setBasePrice(value);
    const GST = (sgst + cgst) / 2;
    const totalAmount = (value * GST) / 100;
    setTax(totalAmount);
  };

  const handleTotalAmount = (value) => {
    if (value) {
      setFinalPrice(value);
    } else {
      const totalSum = basePrice + tax;
      setFinalPrice(totalSum);
    }
  };

  return (
    <Box>
      <Container maxW={"4xl"}>
        <Center>
          <CommonText
            value={"Master rate card form"}
            fontSize={"2xl"}
            paddingY={"10px"}
          />
        </Center>
        <Box>
          <CommonText value={"Item details"} fontSize="20px" paddingY="10px" />
          <Grid
            templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
            gap={"3"}
          >
            <GridItem>
              <CommonGroupInput
                children={"Item name"}
                bg={"white"}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
              />
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
            gap={"3"}
            my={"20px"}
          >
            <GridItem>
              <CommonGroupSelect
                handleSelectedValue={(value) => setFoodType(value)}
                children={"Category"}
                bg={"white"}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
                option={Configs.categoryConfig.map((data) => data)}
                placeholder={"--"}
              />
            </GridItem>
            <GridItem>
              <CommonGroupSelect
                children={"Sub category"}
                bg={"white"}
                placeholder={"--"}
                option={Configs.subCategoryConfig.filter(
                  (data) => data.country === foodType
                )}
                borderLeftRadius={"none"}
                borderLeft={"1px solid #D1D1D1"}
              />
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{ base: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}
            gap={"3"}
            my={"20px"}
          >
            <GridItem colSpan={1}>
              <CommonGroupSelect
                children={"Units"}
                bg={"white"}
                option={Configs.units.map((data) => data)}
                borderLeftRadius={"none"}
                borderLeft={"1px solid #D1D1D1"}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <CommonGroupInput
                children={"Net wt."}
                bg={"white"}
                placeholder={"0000"}
                borderLeftRadius={"none"}
                borderLeft={"1px solid #D1D1D1"}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <CommonGroupInput
                children={"Max order quantity"}
                bg={"white"}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
                placeholder={"--"}
              />
            </GridItem>
          </Grid>
        </Box>
        <Box>
          <CommonText value={"Price details"} fontSize="20px" paddingY="10px" />
          <Grid
            templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(8,1fr)" }}
            gap={"3"}
          >
            <GridItem colSpan={3}>
              <CommonText value={"Taxes"} fontWeight={"bold"} />
              <CommonGroupSelect
                handleSelectedValue={(value) => handleTaxType(value)}
                children={"Tax type *"}
                bg={"white"}
                option={Configs.taxTypes.map((data) => data)}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
              />
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{ base: "repeat(4,1fr)", lg: "repeat(8,1fr)" }}
            gap={"3"}
            my={"20px"}
          >
            <GridItem colSpan={3}>
              <CommonText value={"Code"} fontWeight={"bold"} />
              <CommonGroupSelect
                handleSelectedValue={(value) => setSGST(parseInt(value))}
                disabled={taxType !== "Exclusive"}
                children={"SGST"}
                option={Configs.gstPercentage.map((data) => data)}
                bg={"white"}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
                placeholder={" "}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <CommonText value={"Value"} fontWeight={"bold"} />
              <CommonInput
                value={sgst}
                disabled={taxType !== "Exclusive"}
                borderRadius={"8px"}
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
              <CommonGroupSelect
                handleSelectedValue={(value) => setCGST(parseInt(value))}
                disabled={taxType !== "Exclusive"}
                children={"CGST"}
                bg={"white"}
                option={Configs.gstPercentage.map((data) => data)}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
                placeholder={" "}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <CommonInput
                value={cgst}
                disabled={taxType !== "Exclusive"}
                borderRadius={"8px"}
                placeholder={"00%"}
              />
            </GridItem>
          </Grid>
          <CommonText value={"Variants (if any)"} fontWeight={"bold"} />
          <Grid
            templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(4,1fr)" }}
            gap={"3"}
          >
            <GridItem colSpan={2}>
              <CommonGroupInput
                children={"Variant"}
                bg={"white"}
                borderLeftRadius={"0"}
                placeholder={"--"}
                borderLeft={"1px solid #D1D1D1"}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <CommonGroupInput
                disabled={taxType !== "Exclusive"}
                children={"Base price"}
                bg={"white"}
                borderLeftRadius={"0"}
                placeholder={"₹0000"}
                borderLeft={"1px solid #D1D1D1"}
                handleSelectedValue={(value) => handleGST(parseInt(value))}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <CommonGroupInput
                value={finalPrice}
                color={"red.700"}
                disabled={taxType === "Exclusive"}
                children={"Final price"}
                bg={"white"}
                borderLeftRadius={"0"}
                placeholder={"₹0000"}
                borderLeft={"1px solid #D1D1D1"}
                handleSelectedValue={(value) => handleTotalAmount(value)}
              />
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(8,1fr)" }}
            gap={"3"}
            my={"20px"}
          >
            <GridItem colSpan={7}></GridItem>
            <GridItem colSpan={1}>
              <CommonButton
                value={"Add variant"}
                color={"#18B83B"}
                border={"1px solid #18B83B"}
                bg={"#FCFCFC"}
              />
            </GridItem>
          </Grid>
        </Box>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(8,1fr)" }}
          gap={"3"}
        >
          <GridItem colSpan={6}></GridItem>
          <GridItem colSpan={2}>
            <CommonButton
              value={"Save item"}
              width={"100%"}
              color={"#FFFFFF"}
              bg={"#18B83B"}
            />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}

export default Form;
