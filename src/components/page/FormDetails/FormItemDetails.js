import React from "react";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import CommonText from "../../commons/Text";
import Configs from "../../../data/GroupJSON";
import CommonGroupInput from "../../commons/GroupInput";
import CommonGroupSelect from "../../commons/GroupSelect";

function FormItemDetails(props) {
  return (
    <Box>
      <CommonText fontSize={"20px"} paddingY={"10px"} value={"Item details"} />
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
        gap={"3"}
      >
        <GridItem>
          <CommonGroupInput
            children={"Item name"}
            bg={"white"}
            name={"itemName"}
            value={props.formik.values.itemName}
            onBlur={props.formik.handleBlur}
            onChange={props.formik.handleChange}
            borderLeftRadius={"0"}
            borderLeft={"1px solid #D1D1D1"}
          />
          {props.formik.touched.itemName && props.formik.errors.itemName ? (
            <p style={{ color: "red" }}>{props.formik.errors.itemName}</p>
          ) : null}
        </GridItem>
      </Grid>
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
        gap={"3"}
        my={"20px"}
      >
        <GridItem>
          <CommonGroupSelect
            children={"Category"}
            bg={"white"}
            name={"category"}
            value={props.formik.values.category}
            onChange={props.formik.handleChange}
            borderLeftRadius={"0"}
            borderLeft={"1px solid #D1D1D1"}
            placeholder={"--"}
            option={Configs.categoryConfig}
          />
          {props.formik.touched.category && props.formik.errors.category ? (
            <p style={{ color: "red" }}>{props.formik.errors.category}</p>
          ) : null}
        </GridItem>
        <GridItem>
          <CommonGroupSelect
            children={"Sub category"}
            bg={"white"}
            name={"subCategory"}
            value={props.formik.values.subCategory}
            onChange={props.formik.handleChange}
            borderLeftRadius={"0"}
            borderLeft={"1px solid #D1D1D1"}
            placeholder={"--"}
            option={Configs.subCategoryConfig}
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
            name={"unit"}
            placeholder="Select"
            value={props.formik.values.unit}
            onChange={props.formik.handleChange}
            borderLeftRadius={"0"}
            borderLeft={"1px solid #D1D1D1"}
            option={Configs.units}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <CommonGroupInput
            children={"Net wt."}
            bg={"white"}
            name={"netWeight"}
            value={props.formik.values.netWeight}
            onChange={props.formik.handleChange}
            borderLeftRadius={"0"}
            borderLeft={"1px solid #D1D1D1"}
            placeholder={"0000"}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <CommonGroupInput
            children={"Max order quantity"}
            bg={"white"}
            name={"maxOrderQuantity"}
            value={props.formik.values.maxOrderQuantity}
            onChange={props.formik.handleChange}
            borderLeftRadius={"0"}
            borderLeft={"1px solid #D1D1D1"}
            placeholder={"00000"}
          />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default FormItemDetails;
