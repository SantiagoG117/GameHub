import { Drawer, IconButton, Portal, useDisclosure } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import GenreList from "../genreSideBar/GenreList";
import { useState } from "react";

function GenreHamburger() {
  const [isOpen, setIsOpen] = useState(false);
  //Share state with GenreList if needed
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Drawer.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
        <Drawer.Trigger asChild>
          <IconButton aria-label="Open Genre Menu" variant="outline">
            <FaBars /> Genres
          </IconButton>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Body>
                <GenreList onClose={handleClose} />
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
}

export default GenreHamburger;
