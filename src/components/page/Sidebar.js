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
    <Box bg="#373737" h={"100%"}>
      <Center display="flex" flexDirection="column">
        <CommonButton
          value={"Add customers +"}
          width={"200px"}
          marginY={"25px"}
          color={"button.white"}
          bg={"#E45159"}
        />
        <Link to="/newpage">
          <CommonButton
            value={"Daily Indents"}
            width={"200px"}
            marginBottom={"20px"}
            color={"button.white"}
            bg={"#18B83B"}
          />
        </Link>
        <Box
          border="1px solid #E45159"
          borderRadius="8px"
          color="text.white"
          w="200px"
          padding="20px"
        >
          {SidebarJSON.map((item, index) => (
            <Box key={index} cursor={"pointer"}>
              <CommonText value={item.name} paddingY="8px" fontSize="16px" />
              <Accordion allowMultiple>
                {item.subData !== [] &&
                  item.subData.map((data, i) => (
                    <Box key={i}>
                      <AccordionItem borderStyle="none">
                        <h2>
                          <AccordionButton>
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
                              color="text.gray"
                              fontSize="16px"
                            >
                              <Center>{value.name}</Center>
                            </AccordionPanel>
                          ))}
                      </AccordionItem>
                    </Box>
                  ))}
              </Accordion>
            </Box>
          ))}
        </Box>
      </Center>
    </Box>
  );
}

export default Sidebar;
