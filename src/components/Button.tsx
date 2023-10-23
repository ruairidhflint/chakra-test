import { defineStyleConfig } from "@chakra-ui/react";

export const ButtonStyle = defineStyleConfig({
  baseStyle: {
    color: "#021D2D",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: 400,
  },
  sizes: {
    sm: {
      paddingY: "5px",
      paddingX: "8px",
      fontSize: "12px",
      minWidth: "40px",
      gap: "2px",
      lineHeight: "14px",
    },
    md: {
      paddingY: "7px",
      paddingX: "16px",
      minWidth: "60px",
      gap: "4px",
      lineHeight: "16px",
    },
    lg: {
      paddingY: "10px",
      paddingX: "24px",
      height: "40px",
      minW: "60px",
      gap: "6px",
      lineHeight: "20px",
    },
  },

  variants: {
    primary: {
      background: "#FFBC00",
      _hover: {
        background: "#FFDA7D",
      },
      _active: {
        background: "#F0B000",
      },
      _disabled: {
        background: "rgba(204, 204, 204, 1)",
        color: "#FFF",
        opacity: 1,
        pointerEvents: "none",
      },
    },
    secondary: {
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#021D2D",
      _hover: {
        borderColor: "#BAC1C5",
      },
      _active: {
        background: "#EBF1FF",
        borderColor: "#6780FF",
      },
      _disabled: {
        borderColor: "#CCC",
        color: "#CCC",
        opacity: 1,
        pointerEvents: "none",
      },
    },
    tertiary: {
      background: "#B9D0FF",
      _hover: {
        background: "#E0E7F7",
      },
      _active: {
        background: "#8CA7EB",
      },
      _disabled: {
        background: "#CCC",
        color: "#FFF",
        opacity: 1,
        pointerEvents: "none",
      },
    },
  },
  defaultProps: {
    variant: "primary",
    size: "md",
  },
});
