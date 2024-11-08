import { Text, Input } from "@chakra-ui/react";

export const ChakraInput = () => {
  return (
    <>
      <Text
        display="inline"
        fontFamily="Lato, sans-serif, Arial"
        color="#021d2d"
        fontWeight="700"
        fontSize="14px"
        wordWrap="break-word"
        whiteSpace="nowrap"
        borderWidth="0"
        margin="0"
        padding="0"
        userSelect="none"
        textRendering="optimizeSpeed"
      >
        Input Label
      </Text>
      <Input
        disabled={true}
        placeholder="Placeholder text..."
        h="32px"
        bg="#fafafa"
        fontSize="14px"
        borderColor="#e4e4e4"
        _hover={{ borderColor: "#6780ff" }}
        _disabled={{
          bg: "#cccccc",
          color: "#666666",
          cursor: "not-allowed",
        }}
      />
    </>
  );
};
