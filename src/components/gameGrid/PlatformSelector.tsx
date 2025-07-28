import usePlatforms from "@/hooks/usePlatforms";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/stateManagement/GameQueryStore";

function PlatformSelector() {
  //Global state access
  // Selector: Component will only be dependent on platformId and setSelectedPlatform. Any other changes in the Global state won't cause a re-render
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatform = useGameQueryStore((s) => s.setSelectedPlatform);

  const platform = usePlatform(platformId);
  const { data, error } = usePlatforms();

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
                  onClick={() => setSelectedPlatform(platform.id)}
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
