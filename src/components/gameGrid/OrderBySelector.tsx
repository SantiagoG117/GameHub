import { Button, Menu, Portal } from "@chakra-ui/react";
import { HiSortAscending } from "react-icons/hi";

interface Props {
  onSelectedSortOrder: (sortOrder: { value: string; label: string }) => void;
  selectedSortOrder: { value: string; label: string } | null;
}

function OrderBySelector({ onSelectedSortOrder, selectedSortOrder }: Props) {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Raiting" },
  ];

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          <HiSortAscending /> Order by:{" "}
          {selectedSortOrder ? selectedSortOrder.label : "Relevance"}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders
              .sort((a, b) => a.label.localeCompare(b.label))
              .map((sortOrder) => (
                <Menu.Item
                  key={sortOrder.value}
                  value={sortOrder.value}
                  onClick={() => onSelectedSortOrder(sortOrder)} //Notifies the parent component that a sort order was selected and sends the selected state
                >
                  {sortOrder.label}
                </Menu.Item>
              ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default OrderBySelector;
// <HiSortAscending /> Sort
