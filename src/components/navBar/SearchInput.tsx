import { Input, InputGroup } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  // Create a referece to the Input element so we can access its value
  const inputReference = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [iconColor, setIconColor] = useState("gray");

  console.log(inputReference.current?.value);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault(); //Prevents the form from being posted to the server
        if (inputReference.current) {
          onSearch(inputReference.current.value); //Send the searched value to the parent component
          // Redirect the user back to the home page
          inputReference.current.value = "";
          navigate("/");
        }
      }}
    >
      <InputGroup startElement={<FaSearch color={iconColor} />}>
        <Input
          ref={inputReference} //Get the reference of the Input element
          borderRadius={25}
          placeholder="Search"
          variant="subtle"
          bg="gray.800"
          _hover={{
            backgroundColor: "white", // Background color on hover
            _placeholder: { color: "blackAlpha.700" },
            color: "black",
          }}
          _focus={{
            backgroundColor: "white", // Background color on hover
            _placeholder: { color: "blackAlpha.700" },
            color: "black",
          }}
          onFocus={() => setIconColor("black")}
          onBlur={() => setIconColor("gray")}
          onMouseEnter={() => setIconColor("black")}
          onMouseLeave={() => setIconColor("gray")}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
