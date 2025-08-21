import { Drawer, IconButton, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import GenreList from "../genreSideBar/GenreList";

function GenreHamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

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
