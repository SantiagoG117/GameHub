import useGameQueryStore from "@/stateManagement/GameQueryStore";
import { HStack, Image, Show, useBreakpointValue } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.webp";
import SearchInput from "./SearchInput";
import GenreHamburger from "../gameGrid/GenreHamburger";

function NavBar() {
  // Selector: Component will only be dependent on the setSeatchText. Any other changes in the Global state won't cause a re-render
  const setSearchText = useGameQueryStore((selector) => selector.setSearchText);
  const isBelowLg = useBreakpointValue({ base: true, lg: false });
  const location = useLocation();
  const isGameDetailPage = location.pathname.includes("/games/");

  return (
    <HStack
      width="100%"
      maxW="container.xl"
      mx="auto"
      paddingY={[2, 3, 4]}
      paddingX={[2, 4, 4]}
    >
      <Link to={"/"}>
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput onSearch={(searchedText) => setSearchText(searchedText)} />
      <Show when={isBelowLg || isGameDetailPage}>
        <GenreHamburger />
      </Show>
    </HStack>
  );
}

export default NavBar;
