import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Configs from "../../data/GroupJSON";
import CommonButton from "../commons/Button";
import CommonGroupSelect from "../commons/GroupSelect";
import CommonInput from "../commons/Input";
import CommonText from "../commons/Text";
import Variants from "./Variants";

function PriceDetails() {
  const [taxType, setTaxType] = useState("");
  const [sgst, setSGST] = useState(0);
  const [cgst, setCGST] = useState(0);
  const [tax, setTax] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [value, setValue] = useState([[]]);

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
      <Variants
        handleDelete={handleDelete}
        multipleInputs={value}
        taxType={taxType}
        finalPrice={finalPrice}
        handleTotalAmount={handleTotalAmount}
        handleGST={handleGST}
      />
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(8,1fr)" }}
        gap={"3"}
        my={"20px"}
      >
        <GridItem colSpan={7}></GridItem>
        <GridItem colSpan={1}>
          <CommonButton
            onClick={handleVariant}
            value={"Add variant"}
            color={"#18B83B"}
            border={"1px solid #18B83B"}
            bg={"#FCFCFC"}
          />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default PriceDetails;
