import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
}

function ExpandableText({ text }: Props) {
  const [isExpandable, setIsExpandable] = useState(true);

  if (!text) return null;

  //Make sure the text is long enought
  const isLong = text.length >= 400;

  //Dynamically set the text to be displayed
  const displayText =
    isExpandable && isLong ? text.slice(0, 400) + "..." : text;

  return (
    <Text fontSize={["xs", "sm", "md", "lg"]} paddingBottom={3}>
      {displayText}{" "}
      <Button
        size={["xs", "sm", "md"]}
        fontWeight="bold"
        colorScheme="yellow"
        bg="yellow.400"
        color="black"
        _hover={{ bg: "yellow.500" }}
        onClick={() => setIsExpandable(!isExpandable)}
        fontSize={["xs", "2xs", "sm", "md", "lg"]}
        padding={["0.5", "1", "1.5", "2.0"]}
      >
        {isExpandable ? "Show more" : "Show less"}
      </Button>
    </Text>
  );
}

export default ExpandableText;
