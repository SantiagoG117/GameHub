import usePlatforms, { Platforms } from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import platforms from "@/data/platforms";

interface Props {
  onSelectedPlatformId: (platformId: number) => void;
  selectedPlatformId: number | null;
}

function PlatformSelector({ onSelectedPlatformId, selectedPlatformId }: Props) {
  const { data, error } = usePlatforms();
  const platform = data.results.find((p) => p.id === selectedPlatformId);

  if (error) return;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {platform ? platform.name : "Select Platform"} <BsChevronDown />
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
                    onSelectedPlatformId(platform.id)
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
