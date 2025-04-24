import { Input, InputGroup } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchInput() {
  return (
    <InputGroup startElement={<FaSearch />}>
      <Input
        borderRadius={25}
        placeholder="Search ... games"
        variant="subtle"
        bg="gray.800"
        _hover={{
          backgroundColor: "white", // Background color on hover
          _placeholder: { color: "blackAlpha.700" }, // Placeholder color on hover
        }}
        _focus={{
          backgroundColor: "white", // Background color on hover
          _placeholder: { color: "blackAlpha.700" }, // Placeholder color on hover
          color: "black",
        }}
      />
    </InputGroup>
  );
}

export default SearchInput;
