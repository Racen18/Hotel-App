import React from "react";
import { Center, Container, Grid, GridItem } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import CommonButton from "../commons/Button";
import CommonText from "../commons/Text";
import ItemDetails from "../view/ItemDetails";
import PriceDetails from "../view/PriceDetails";
import Joi from "joi";

function MasterForm() {
  const validate = Joi.object({
    itemName: Joi.string().required("Required"),
    netWeight: Joi.number().required("Required"),
    maxOrderQuantity: Joi.number().required("Required"),
  });

  return (
    <Formik
      initialValues={{
        itemName: "",
        netWeight: "",
        maxOrderQuantity: "",
      }}
      validationSchema={validate}
    >
      {(formik) => (
        <Form>
          <Container maxW={"4xl"}>
            <Center>
              <CommonText
                value={"Master rate card form"}
                fontSize={"2xl"}
                paddingY={"10px"}
              />
            </Center>
            <ItemDetails />
            <PriceDetails />
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
        </Form>
      )}
    </Formik>
  );
}

export default MasterForm;
