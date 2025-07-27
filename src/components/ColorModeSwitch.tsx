import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "./chakraUI/color-mode";
import { ColorPalette } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch.Root
        colorPalette="yellow"
        onChange={toggleColorMode}
        checked={colorMode === "dark"}
      >
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label whiteSpace="nowrap">Dark Mode</Switch.Label>
      </Switch.Root>
    </HStack>
  );
}

export default ColorModeSwitch;
