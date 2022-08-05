import React from "react";
import {
  Center,
  Container,
  Grid,
  GridItem,
  Text,
  Input,
  Select,
  Button,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";

function Form() {
  return (
    <div>
      <Container maxW="4xl">
        <Center>
          <Text fontSize="2xl" paddingY="10px">
            Master rate card form
          </Text>
        </Center>
        <Text fontSize="20px" paddingY="10px">
          Item details
        </Text>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
          gap="3"
        >
          <GridItem>
            <InputGroup>
              <InputLeftAddon  children="Item name" bg="white" />
              <Input borderLeft="1px solid #D1D1D1" />
            </InputGroup>
          </GridItem>
        </Grid>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(2,1fr)" }}
          gap="3"
          my="20px"
        >
          <GridItem>
            <InputGroup>
              <InputLeftAddon children="Category" bg="white" />
              <Input borderLeft="1px solid #D1D1D1" placeholder="--" />
            </InputGroup>
          </GridItem>
          <GridItem>
            <InputGroup>
              <InputLeftAddon children="Sub category" bg="white" />
              <Select
                placeholder="--"
                borderRadius="none"
                borderLeft="1px solid #D1D1D1"
              />
            </InputGroup>
          </GridItem>
        </Grid>
        <Grid templateColumns={{base:"repeat(2,1fr)", lg:"repeat(4,1fr)"}} gap="3" my="20px">
          <GridItem colSpan={1}>
            <InputGroup>
              <InputLeftAddon children="Units" bg="white" />
              <Select
                placeholder="Kgs"
                borderRadius="none"
                borderLeft="1px solid #D1D1D1"
              />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={1}>
            <InputGroup>
              <InputLeftAddon children="Net wt." bg="white" />
              <Select
                placeholder="0000"
                borderRadius="none"
                borderLeft="1px solid #D1D1D1"
              />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={2}>
            <InputGroup>
              <InputLeftAddon children="Max order quantity" bg="white" />
              <Input borderLeft="1px solid #D1D1D1" placeholder="--" />
            </InputGroup>
          </GridItem>
        </Grid>
        <Text fontSize="20px" paddingY="10px">
          Price details
        </Text>
        <Grid templateColumns={{base:"repeat(1,1fr)", lg:"repeat(8,1fr)"}} gap="3">
          <GridItem colSpan={3}>
            <Text fontWeight="bold">Taxes</Text>
            <InputGroup>
              <InputLeftAddon children="Tax type *" bg="white" />
              <Select
                borderLeftRadius="0px"
                placeholder="Inclusive"
                borderLeft="1px solid #D1D1D1"
              />
            </InputGroup>
          </GridItem>
        </Grid>
        <Grid templateColumns={{base:"repeat(4,1fr)", lg:"repeat(8,1fr)"}} gap="3" my="20px">
          <GridItem colSpan={3}>
            <Text fontWeight="bold">Code</Text>
            <InputGroup>
              <InputLeftAddon children="SGST" bg="white" />
              <Select borderLeftRadius="0px" borderLeft="1px solid #D1D1D1" />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={1}>
            <Text fontWeight="bold">Value</Text>
            <Input borderRadius="8px" placeholder="00%" />
          </GridItem>
        </Grid>
        <Grid templateColumns={{base:"repeat(4,1fr)", lg:"repeat(8,1fr)"}} gap="3" my="20px">
          <GridItem colSpan={3}>
            <InputGroup>
              <InputLeftAddon children="CGST" bg="white" />
              <Select borderLeftRadius="0px" borderLeft="1px solid #D1D1D1" />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={1}>
            <Input borderRadius="8px" placeholder="00%" />
          </GridItem>
        </Grid>
        <Text fontWeight="bold">Variants (if any)</Text>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(4,1fr)" }}
          gap="3"
        >
          <GridItem colSpan={2}>
            <InputGroup>
              <InputLeftAddon children="Variant" bg="white" />
              <Select
                borderLeftRadius="0px"
                placeholder="--"
                borderLeft="1px solid #D1D1D1"
              />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={1}>
            <InputGroup>
              <InputLeftAddon children="Base price" bg="white" />
              <Input placeholder="₹0000" borderLeft="1px solid #D1D1D1" />
            </InputGroup>
          </GridItem>
          <GridItem colSpan={1}>
            <InputGroup>
              <InputLeftAddon children="Final price" bg="white" />
              <Input placeholder="₹0000" borderLeft="1px solid #D1D1D1" />
            </InputGroup>
          </GridItem>
        </Grid>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(8,1fr)" }}
          gap="3"
          my='20px'
        >
          <GridItem colSpan={7}></GridItem>
          <GridItem colSpan={1}>
            <Button color="#18B83B" border="1px solid #18B83B" bg="#FCFCFC">
              Add variant
            </Button>
          </GridItem>
        </Grid>
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(8,1fr)" }}
          gap="3"
        >
          <GridItem colSpan={6}></GridItem>
          <GridItem colSpan={2}>
            <Button w="100%" color="#FFFFFF" bg="#18B83B">
              Save item
            </Button>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
}

export default Form;
