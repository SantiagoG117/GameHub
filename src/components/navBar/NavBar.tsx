import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import SearchInput from "../gameGrid/SearchInput";
import ColorModeSwitch from "../ColorModeSwitch";
;

interface Props {
  onSearch: (searchText: string) => void;
}
function NavBar({ onSearch }: Props) {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={(searchedText) => onSearch(searchedText)} />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
