import { Box, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import Configs from "../../data/GroupJSON";
import { useField } from "formik";
import CommonGroupInput from "../commons/GroupInput";
import CommonGroupSelect from "../commons/GroupSelect";
import CommonText from "../commons/Text";

function ItemDetails(props) {
  const [foodType, setFoodType] = useState("");
  const [field, meta] = useField(props);
  return (
    <Box>
      <CommonText value={"Item details"} fontSize="20px" paddingY="10px" />
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
        gap={"3"}
      >
        <GridItem>
          <CommonGroupInput
            value={field.value.itemName}
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
            value={field.value.netWeight}
            children={"Net wt."}
            bg={"white"}
            placeholder={"0000"}
            borderLeftRadius={"none"}
            borderLeft={"1px solid #D1D1D1"}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <CommonGroupInput
            value={field.value.maxOrderQuantity}
            children={"Max order quantity"}
            bg={"white"}
            borderLeftRadius={"0"}
            borderLeft={"1px solid #D1D1D1"}
            placeholder={"--"}
          />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default ItemDetails;
