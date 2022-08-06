import Topbar from "./components/Topbar";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";

function App() {
  return (
    <Box>
      <Topbar />
      <Grid templateColumns={"repeat(5, 1fr)"}>
        <GridItem
          colSpan={1}
          bg="#373737"
          display={{ base: "none", lg: "block" }}
        >
          <Sidebar />
        </GridItem>
        <GridItem colSpan={{ base: 5, lg: 4 }} bg="white">
          <Form />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
