import { Input, InputGroup } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  // Create a referece to the Input element so we can access its value
  const inputReference = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); //Prevents the form from being posted to the server
        if (inputReference.current) onSearch(inputReference.current.value); //Send the searched value to the parent component
      }}
    >
      <InputGroup startElement={<FaSearch />}>
        <Input
          ref={inputReference} //Get the reference of the Input element
          borderRadius={25}
          placeholder="Search ... games"
          variant="subtle"
          bg="gray.800"
          _hover={{
            backgroundColor: "white",
            _placeholder: { color: "blackAlpha.700" },
          }}
          _focus={{
            backgroundColor: "white", // Background color on hover
            _placeholder: { color: "blackAlpha.700" },
            color: "black",
          }}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
