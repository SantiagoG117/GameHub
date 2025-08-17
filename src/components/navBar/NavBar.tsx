import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "../ColorModeSwitch";
import useGameQueryStore from "@/stateManagement/GameQueryStore";
import { Link } from "react-router-dom";

/*
  TODO
    ! Improve responsiveness
    ! 
*/
function NavBar() {
  // Selector: Component will only be dependent on the setSeatchText. Any other changes in the Global state won't cause a re-render
  const setSearchText = useGameQueryStore((selector) => selector.setSearchText);
  return (
    <HStack
      width="100%"
      maxW="container.xl"
      mx="auto"
      paddingY={[2, 3, 4]}
      paddingX={[2, 4, 8]}
    >
      <Link to={"/"}>
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput onSearch={(searchedText) => setSearchText(searchedText)} />
      {/* <ColorModeSwitch /> */}
    </HStack>
  );
}

export default NavBar;
