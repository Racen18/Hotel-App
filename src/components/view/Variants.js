import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import CommonButton from "../commons/Button";
import CommonGroupInput from "../commons/GroupInput";
import CommonText from "../commons/Text";

function Variants(props) {
  return (
    <Box>
      <CommonText value={"Variants (if any)"} fontWeight={"bold"} />
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(4,1fr)" }}
        gap={"3"}
      >
        {props.multipleInputs.map((data, i) => (
          <>
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
                disabled={props.taxType !== "Exclusive"}
                children={"Base price"}
                bg={"white"}
                borderLeftRadius={"0"}
                placeholder={"₹0000"}
                borderLeft={"1px solid #D1D1D1"}
                handleSelectedValue={(value) =>
                  props.handleGST(parseInt(value))
                }
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Flex>
                <CommonGroupInput
                  value={props.finalPrice}
                  color={"red.700"}
                  disabled={props.taxType === "Exclusive"}
                  children={"Final price"}
                  bg={"white"}
                  borderLeftRadius={"0"}
                  placeholder={"₹0000"}
                  borderLeft={"1px solid #D1D1D1"}
                  handleSelectedValue={(value) =>
                    props.handleTotalAmount(value)
                  }
                />
                <CommonButton
                  border={"1px solid #18B83B"}
                  bg={"#FCFCFC"}
                  color={"#18B83B"}
                  value={"X"}
                  onClick={(e) => props.handleDelete(e, i)}
                />
              </Flex>
            </GridItem>
          </>
        ))}
      </Grid>
    </Box>
  );
}

export default Variants;
