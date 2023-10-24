import { defineStyleConfig } from "@chakra-ui/react";

export const ModalStyle = defineStyleConfig({
  baseStyle: {
    dialog: {
      borderRadius: "8px",
    },
    header: {
      color: "#021D2D",
      fontSize: "14px",
      borderBottom: "1px solid #D7D6E5",
    },
  },
  sizes: {},
  defaultProps: {},
});
