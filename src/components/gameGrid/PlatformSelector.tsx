import usePlatforms, { Platforms } from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedPlatform: (platform: Platforms) => void;
  selectedPlatform: Platforms | null;
}

function PlatformSelector({ onSelectedPlatform, selectedPlatform }: Props) {
  const { data, error } = usePlatforms();

  if (error) return;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform ? selectedPlatform.name : "Select Platform"}{" "}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results
              .sort((a, b) => a.name.localeCompare(b.name)) //Sort by name in ascending order
              .map((platform) => (
                <Menu.Item
                  value={platform.name}
                  key={platform.id}
                  onClick={() =>
                    onSelectedPlatform(platform)
                  } /* Notifies the parent component that a platform was selected */
                >
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
