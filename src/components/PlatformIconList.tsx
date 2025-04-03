import { Platforms } from "@/services/games-service";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platform: { platform: Platforms }[];
}

function PlatformIconList({ platform }: Props) {
  /*
    iconMap works as a mapper that takes a key and returns its correspondant icon name.
    The keys of the object are the slug of each Platform object defined in the api and their values are the names of each icon.
    We must annotate the iconMap to prevent compilation errors. We must specify that the iconMap is an object that can have
    any number of string keys:
        [key: string] is an index signature represeting a key in the iconMap object. This prevents us from having to specify the name of each key. 
            Each key is mapped to a value of IconType(defined in react Icons library)

   */
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platform.map(({ platform }) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
}

export default PlatformIconList;
