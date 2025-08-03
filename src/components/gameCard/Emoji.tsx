import bullsEye from "@/assets/bulls-eye.webp";
import thumbsUp from "@/assets/thumbs-up.webp";
import meh from "@/assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  raiting: number;
}

/* 
  We must annotate the emojimap to prevent compilation errors and enusure type safety. 
  To do so we have to define the type of the emojiMap, which is an object with keys of type number and values of type ImageProps
    - ImageProp is a UI Chackra type that represent the properties that can be passed to the Image component. 
*/
const emojiMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: "meh", boxSize: "25px" },
  4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
  5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
};

function Emoji({ raiting }: Props) {
  if (raiting < 3) return null;

  return <Image {...emojiMap[raiting]} marginTop={1 } />; //By spreading the emojiMap object, all the ImageProps attributes will be automatically added to the Image component
}

export default Emoji;
