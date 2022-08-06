import React from "react";
import { Center, Container, Grid, GridItem, Box } from "@chakra-ui/react";
import CommonButton from "./commons/Button";
import CommonText from "./commons/Text";
import CommonInput from "./commons/Input";
import CommonGroupSelect from "./commons/GroupSelect";
import CommonGroupInput from "./commons/GroupInput";

function Form() {
  return (
    <Box>
      <Container maxW="4xl">
        <Center>
          <CommonText
            value={"Master rate card form"}
            fontSize="2xl"
            paddingY="10px"
          />
        </Center>
        <Box>
          <CommonText value={"Item details"} fontSize="20px" paddingY="10px" />
          <Grid
            templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
            gap="3"
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
            gap="3"
            my="20px"
          >
            <GridItem>
              <CommonGroupInput
                children={"Category"}
                bg={"white"}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
                placeholder={"--"}
              />
            </GridItem>
            <GridItem>
              <CommonGroupSelect
                children={"Sub category"}
                bg={"white"}
                placeholder={"--"}
                borderLeftRadius={"none"}
                borderLeft={"1px solid #D1D1D1"}
              />
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{ base: "repeat(2,1fr)", lg: "repeat(4,1fr)" }}
            gap="3"
            my="20px"
          >
            <GridItem colSpan={1}>
              <CommonGroupSelect
                children={"Units"}
                bg={"white"}
                placeholder={"Kgs"}
                borderLeftRadius={"none"}
                borderLeft={"1px solid #D1D1D1"}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <CommonGroupSelect
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
            gap="3"
          >
            <GridItem colSpan={3}>
              <CommonText value={"Taxes"} fontWeight={"bold"} />
              <CommonGroupSelect
                children={"Tax type *"}
                bg={"white"}
                borderLeftRadius={"0"}
                placeholder={"Inclusive"}
                borderLeft={"1px solid #D1D1D1"}
              />
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{ base: "repeat(4,1fr)", lg: "repeat(8,1fr)" }}
            gap="3"
            my="20px"
          >
            <GridItem colSpan={3}>
              <CommonText value={"Code"} fontWeight={"bold"} />
              <CommonGroupSelect
                children={"SGST"}
                bg={"white"}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <CommonText value={"Value"} fontWeight={"bold"} />
              <CommonInput borderRadius={"8px"} placeholder={"00%"} />
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{ base: "repeat(4,1fr)", lg: "repeat(8,1fr)" }}
            gap="3"
            my="20px"
          >
            <GridItem colSpan={3}>
              <CommonGroupSelect
                children={"CGST"}
                bg={"white"}
                borderLeftRadius={"0"}
                borderLeft={"1px solid #D1D1D1"}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <CommonInput borderRadius={"8px"} placeholder={"00%"} />
            </GridItem>
          </Grid>
          <CommonText value={"Variants (if any)"} fontWeight={"bold"} />
          <Grid
            templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(4,1fr)" }}
            gap="3"
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
                children={"Base price"}
                bg={"white"}
                borderLeftRadius={"0"}
                placeholder={"₹0000"}
                borderLeft={"1px solid #D1D1D1"}
              />
            </GridItem>
            <GridItem colSpan={1}>
              <CommonGroupInput
                children={"Final price"}
                bg={"white"}
                borderLeftRadius={"0"}
                placeholder={"₹0000"}
                borderLeft={"1px solid #D1D1D1"}
              />
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(8,1fr)" }}
            gap="3"
            my="20px"
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
          gap="3"
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
