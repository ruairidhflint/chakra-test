import { Button, type ButtonProps } from "@chakra-ui/react";

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary" | "action";

interface CustomButtonProps extends ButtonProps {
  size?: ButtonSize;
  customVariant?: ButtonVariant;
}

const sizeStyles = {
  sm: {
    fontSize: "12px",
    maxHeight: "24px",
    padding: "4.5px 8px",
  },
  md: {
    fontSize: "14px",
    maxHeight: "32px",
    padding: "7px 16px",
  },
  lg: {
    fontSize: "16px",
    maxHeight: "40px",
    padding: "10px 24px",
  },
};

const variantStyles = {
  primary: {
    backgroundColor: "#ffbc00",
    color: "#021d2d",
    border: "1px solid transparent",
    _hover: {
      backgroundColor: "#ffda7d",
    },
  },
  secondary: {
    backgroundColor: "white",
    color: "#021d2d",
    border: "1px solid #021d2d",
    _hover: {
      border: "1px solid #6780ff",
      backgroundColor: "#ebf1ff",
    },
  },
  action: {
    backgroundColor: "#b9d0ff",
    color: "#021d2d",
    border: "1px solid transparent",
    _hover: {
      backgroundColor: "#e0e7f7",
    },
  },
};

export const ChakraButton = ({
  children,
  size = "md",
  customVariant = "primary",
  ...props
}: CustomButtonProps) => {
  return (
    <Button
      // Layout
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      flexDir="row-reverse"
      gap="5px"
      w="unset"
      h="unset"
      maxW="100%"
      // Text
      fontWeight="400"
      fontFamily="Lato, sans-serif, Arial"
      // Border
      borderRadius="3px"
      // Spacing
      m="0"
      // Interaction
      cursor="pointer"
      transition="background-color 0.2s, color 0.2s, border-color 0.2s"
      // _hover={{
      //   opacity: 0.8,
      // }}
      // Animation
      animationDuration="0.01ms !important"
      animationIterationCount="1 !important"
      // Apply size and variant styles
      {...sizeStyles[size]}
      {...variantStyles[customVariant]}
      // Allow prop overrides
      {...props}
    >
      {children}
    </Button>
  );
};
