import React from "react";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { FieldArray } from "formik";
import Configs from "../../../data/GroupJSON";
import CommonText from "../../commons/Text";
import CommonInput from "../../commons/Input";
import CommonButton from "../../commons/Button";
import CommonGroupInput from "../../commons/GroupInput";
import CommonGroupSelect from "../../commons/GroupSelect";

function FormPriceDetails(props) {
  const variant = props.formik.values.items;
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
            value={props.formik.values.sgst + "%"}
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
            value={props.formik.values.cgst + "%"}
            disabled={props.formik.values.taxType === "Not applicable"}
            borderLeft={"1px solid #D1D1D1"}
            placeholder={"00%"}
          />
        </GridItem>
      </Grid>
      <CommonText fontWeight={"bold"} value={"Variants (if any)"} />
      {variant.map((data, i) => (
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(8,1fr)" }}
          gap={"3"}
          paddingY={"5px"}
          key={i}
        >
          <GridItem colSpan={3}>
            <CommonGroupInput
              children={"Variant"}
              bg={"white"}
              name={`items.${i}.variantName`}
              value={variant[i].variantName}
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
              name={`items.${i}.basePrice`}
              color={"input.red"}
              disabled={
                props.formik.values.taxType === "Inclusive" ||
                props.formik.values.taxType === ""
              }
              value={variant[i].basePrice}
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
              name={`items.${i}.finalPrice`}
              color={"input.red"}
              disabled={props.formik.values.taxType !== "Inclusive"}
              value={variant[i].finalPrice}
              onChange={props.formik.handleChange}
              borderLeftRadius={"0"}
              borderLeft={"1px solid #D1D1D1"}
              placeholder={"--"}
            />
          </GridItem>
          <GridItem colSpan={1}>
            {variant.length > 1 && (
              <CommonButton
                value={"X"}
                onClick={() => props.handleDeleteVariant(i)}
                color={"button.green"}
                border={"1px solid #18B83B"}
                bg={"#FCFCFC"}
              />
            )}
          </GridItem>
        </Grid>
      ))}
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(8,1fr)" }}
        gap={"3"}
        my={"20px"}
      >
        <GridItem colSpan={7}></GridItem>
        <GridItem colSpan={1}>
          {variant.length < 4 && (
            <CommonButton
              value={"Add variant"}
              onClick={() => props.handleAddVariant()}
              color={"button.green"}
              border={"1px solid #18B83B"}
              bg={"#FCFCFC"}
            />
          )}
        </GridItem>
        {console.log("formikData", props.formik.values)}
      </Grid>
    </Box>
  );
}

export default FormPriceDetails;
