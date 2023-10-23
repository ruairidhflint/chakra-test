import { defineStyleConfig } from "@chakra-ui/react";

export const RadioStyle = defineStyleConfig({
  baseStyle: {
    label: {
      color: "#021D2D",
    },
    control: {
      width: "14px",
      height: "14px",
      borderColor: "black",
      _checked: {
        bgColor: "white",
        color: "black",
        borderColor: "black",
      },
      _hover: {
        _checked: {
          bgColor: "white",
          color: "#8CA7EB",
          borderColor: "#8CA7EB",
        },
        bgColor: "white",
        color: "#8CA7EB",
        borderColor: "#8CA7EB",
      },
      _disabled: {
        _checked: {
          bgColor: "white",
          color: "#CCCCCC",
          pointerEvents: "none",
          borderColor: "#CCCCCC",
        },
        bgColor: "white",
        color: "white",
        pointerEvents: "none",
        borderColor: "#CCCCCC",
      },
    },
  },

  sizes: {
    sm: {
      control: {
        width: "12px",
        height: "12px",
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "14px",
      },
    },
    md: {
      control: {
        width: "14px",
        height: "14px",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "16px",
      },
    },
    lg: {
      control: {
        width: "16px",
        height: "16px",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "20px",
      },
    },
  },
  defaultProps: {
    size: "md",
  },
});
