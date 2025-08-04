import NavBar from "@/components/navBar/NavBar";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function LayoutPage() {
  return (
    <>
      {/* All components should have a NavBar */}
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
}

export default LayoutPage;
