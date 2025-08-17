import { Games } from "@/entities/Games";
import { Box, Heading, List } from "@chakra-ui/react";

interface Props {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

function AttributesBox<T>({ title, children }: Props) {
  return (
    <Box>
      <Heading color={"gray.600"} fontSize={["md", "lg", "xl"]}>
        {title}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
}

export default AttributesBox;
