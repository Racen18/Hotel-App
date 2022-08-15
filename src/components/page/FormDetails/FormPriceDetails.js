import React from "react";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import Configs from "../../../data/GroupJSON";
import CommonText from "../../commons/Text";
import CommonInput from "../../commons/Input";
import CommonButton from "../../commons/Button";
import CommonGroupInput from "../../commons/GroupInput";
import CommonGroupSelect from "../../commons/GroupSelect";

function FormPriceDetails(props) {
  return (
    <Box>
      <CommonText fontSize={"20px"} paddingY={"10px"} value={"Price details"} />
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(8,1fr)" }}
        gap={"3"}
      >
        <GridItem colSpan={3}>
          <CommonText fontWeight={"bold"} value={"Taxes"} />
          <CommonGroupSelect
            children={"Tax type *"}
            bg={"white"}
            name={"taxType"}
            placeholder={"Select"}
            value={props.formik.values.taxType}
            onChange={props.formik.handleChange}
            borderLeftRadius={"0"}
            borderLeft={"1px solid #D1D1D1"}
            option={Configs.taxTypes}
          />
        </GridItem>
      </Grid>
      <Grid
        templateColumns={{ base: "repeat(4,1fr)", lg: "repeat(8,1fr)" }}
        gap={"3"}
        my={"20px"}
      >
        <GridItem colSpan={3}>
          <CommonText fontWeight={"bold"} value={"Code"} />
          <CommonGroupSelect
            children={"SGST"}
            bg={"white"}
            name={"sgst"}
            placeholder={"Select"}
            value={props.formik.values.sgst}
            disabled={props.formik.values.taxType === "Not applicable"}
            onChange={props.formik.handleChange}
            borderLeftRadius={"0"}
            borderLeft={"1px solid #D1D1D1"}
            option={Configs.gstPercentage}
          />
        </GridItem>
        <GridItem>
          <CommonText fontWeight={"bold"} value={"Value"} />
          <CommonInput
            readOnly={true}
            value={props.formik.values.sgst}
            disabled={props.formik.values.taxType === "Not applicable"}
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
          <CommonGroupSelect
            children={"CGST"}
            bg={"white"}
            name={"cgst"}
            placeholder={"Select"}
            value={props.formik.values.cgst}
            disabled={props.formik.values.taxType === "Not applicable"}
            onChange={props.formik.handleChange}
            borderLeftRadius={"0"}
            borderLeft={"1px solid #D1D1D1"}
            option={Configs.gstPercentage}
          />
        </GridItem>
        <GridItem>
          <CommonInput
            readOnly={true}
            value={props.formik.values.cgst}
            disabled={props.formik.values.taxType === "Not applicable"}
            borderLeft={"1px solid #D1D1D1"}
            placeholder={"00%"}
          />
        </GridItem>
      </Grid>
      <CommonText fontWeight={"bold"} value={"Variants (if any)"} />
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(8,1fr)" }}
        gap={"3"}
      >
        {props.value.map((data, i) => (
          <>
            <GridItem colSpan={3}>
              <CommonGroupInput
                children={"Variant"}
                bg={"white"}
                name={"variantName"}
                value={props.formik.values.variantName}
                onChange={props.formik.handleChange}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
                placeholder={"--"}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <CommonGroupInput
                children={"Base price"}
                bg={"white"}
                name={"basePrice"}
                color={"red"}
                disabled={
                  props.formik.values.taxType === "Inclusive" ||
                  props.formik.values.taxType === ""
                }
                value={props.formik.values.basePrice}
                onChange={props.formik.handleChange}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
                placeholder={"--"}
              />
            </GridItem>
            <GridItem colSpan={2}>
              <CommonGroupInput
                children={"Final price"}
                bg={"white"}
                name={"finalPrice"}
                color={"red"}
                disabled={props.formik.values.taxType !== "Inclusive"}
                value={props.formik.values.finalPrice}
                onChange={props.formik.handleChange}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
                placeholder={"--"}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <CommonButton
                value={"X"}
                onClick={(e) => props.handleDelete(e, i)}
                color={"#18B83B"}
                border={"1px solid #18B83B"}
                bg={"#FCFCFC"}
              />
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
          <CommonButton
            value={"Add variant"}
            onClick={(e) => props.handleVariant(e)}
            color={"#18B83B"}
            border={"1px solid #18B83B"}
            bg={"#FCFCFC"}
          />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default FormPriceDetails;
