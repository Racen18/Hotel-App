import { Box, Grid, GridItem } from "@chakra-ui/react";
import Topbar from "./components/page/Topbar";
import Sidebar from "./components/page/Sidebar";
// import MasterForm from "./components/page/Form";
import FormikForm from "./components/page/FormikForm";

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
        <GridItem colSpan={{ base: 5, lg: 4 }}>
          {/* <MasterForm /> */}
          <FormikForm />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
