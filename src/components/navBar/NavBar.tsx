import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import SearchInput from "../gameGrid/SearchInput";
import ColorModeSwitch from "../ColorModeSwitch";
import useGameQueryStore from "@/stateManagement/GameQueryStore";

function NavBar() {
  // Selector: Component will only be dependent on the setSeatchText. Any other changes in the Global state won't cause a re-render
  const setSearchText = useGameQueryStore((selector) => selector.setSearchText);
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={(searchedText) => setSearchText(searchedText)} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
