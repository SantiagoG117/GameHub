"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defaultSystem,
  defineConfig,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

// Define the styling system configuration
const config = defineConfig({
  // defineConfig accepts a configuration object that allows you to customize the styling system's behavior
  theme: {
    /* 
      TokenSchema: In Chackra UI, a TokenSchema structure define the design tokens used in the theme configuration.
      Design tikens are reusable, platform-agnostic variables that represent design rules like colors. They are used
      to maintain consistency across the application.
     */
    tokens: {
      colors: {
        
      },
    },
  },
});

// Create a styling engine
const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
