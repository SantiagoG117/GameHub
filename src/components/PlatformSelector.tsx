import { Platforms } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

function PlatformSelector() {
  const { data, error } = usePlatforms();

  if (error) return;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Platforms <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platform) => (
              <Menu.Item value={platform.name} key={platform.id}>
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default PlatformSelector;
