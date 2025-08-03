import NavBar from "@/components/navBar/NavBar";
import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function LayoutPage() {
  return (
    <>
      {/* All components should have a NavBar */}
      <NavBar />
      <Outlet />
    </>
  );
}

export default LayoutPage;
