import React from "react";
import { Link } from "react-router-dom";
import SidebarJSON from "../../data/Sidebar.json";
import {
  Center,
  Box,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import CommonButton from "../commons/Button";
import CommonText from "../commons/Text";

function Sidebar() {
  return (
    <Box bg="#373737">
      <Center display="flex" flexDirection="column">
        <CommonButton
          value={"Add customers +"}
          width={"200px"}
          marginY={"25px"}
          color={"white"}
          bg={"#E45159"}
        />
        <Link to='/newpage'>
        <CommonButton
          value={"Daily Indents"}
          width={"200px"}
          marginBottom={"20px"}
          color={"white"}
          bg={"#18B83B"}
        />
        </Link>
        <Box
          border="1px solid #E45159"
          borderRadius="8px"
          color="white"
          w="200px"
          padding="20px"
        >
          {SidebarJSON.map((item) => (
            <>
              <CommonText value={item.name} paddingY="8px" fontSize="16px" />
              <Accordion allowMultiple>
                {item.subData !== [] &&
                  item.subData.map((data, index) => (
                    <AccordionItem borderStyle="none">
                      <h2>
                        <AccordionButton key={index}>
                          <Box>{data.name}</Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      {data.subData !== [] &&
                        data.subData.map((value, index) => (
                          <AccordionPanel
                            key={index}
                            padding="5px"
                            borderLeft="0.1px solid #80808040"
                            color="#C2C2C2"
                            fontSize="16px"
                          >
                            <Center>{value.name}</Center>
                          </AccordionPanel>
                        ))}
                    </AccordionItem>
                  ))}
              </Accordion>
            </>
          ))}
        </Box>
      </Center>
    </Box>
  );
}

export default Sidebar;
