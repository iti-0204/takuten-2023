import { extendTheme } from "@chakra-ui/react";

const baseColors = {
  transparent: "transparent",
  black: "#000",
  white: "#fff",

  blue: "#76bef3",
  yellow: "#f7cb59",
  beige: "#FDFBF6",

  gray: {
    50: "#E2E2E2",
    100: "#D9D9D9",
    200: "#CECECE",
    300: "#BABABA",
    400: "#9A9A9A",
    500: "#585858",
  },
};

const theme = extendTheme({
  colors: {
    baseColors,
  },
  styles: {
    global: {
      body: {
        backgroundColor: baseColors.beige,
      },
    },
  },
});
export default theme;
