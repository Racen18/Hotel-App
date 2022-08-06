import React from "react";
import SidebarJSON from "../data/Sidebar.json";
import {
  Center,
  Button,
  Box,
  Text,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

function Sidebar() {
  return (
    <Box bg="#373737">
      <Center display="flex" flexDirection="column">
        <Button w="200px" marginY="25px" color="white" bg="#E45159">
          Add customers +
        </Button>
        <Button marginBottom="20px" w="200px" color="white" bg="#18B83B">
          Daily Indents
        </Button>

        <Box
          border="1px solid #E45159"
          borderRadius="8px"
          color="white"
          w="200px"
          padding="20px"
        >
          {SidebarJSON.map((item) => (
            <>
              <Text key={item.value} paddingY="8px" fontSize="16px">
                {item.name}
              </Text>
              <Accordion allowMultiple>
                {item.subData !== [] &&
                  item.subData.map((data) => (
                    <AccordionItem borderStyle="none">
                      <h2>
                        <AccordionButton key={data.value}>
                          <Box flex="1" textAlign="left">
                            {data.name}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      {data.subData !== [] &&
                        data.subData.map((value) => (
                          <AccordionPanel
                            key={value.value}
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
