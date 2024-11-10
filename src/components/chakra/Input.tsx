import { Text, Input } from "@chakra-ui/react";

export const ChakraInput = ({
  disabled = false,
  required = false,
  error = undefined,
}: {
  disabled?: boolean;
  required?: boolean;
  error?: string;
}) => {
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
        Input Label {required && <Text as="span">*</Text>}
      </Text>
      <Input
        disabled={disabled}
        placeholder="Placeholder text..."
        h="32px"
        bg="#fafafa"
        fontSize="14px"
        borderColor={error ? "#fd2d46" : "#e4e4e4"}
        _hover={{ borderColor: "#6780ff" }}
        _disabled={{
          bg: "#eaeaea",
          color: "#666666",
          cursor: "not-allowed",
        }}
      />
      {error && (
        <Text
          as="span"
          fontSize="10px"
          color="#fd2d46"
          mb={0}
          display="inline-flex"
          alignItems="center"
          gap="4px"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12px"
            height="12px"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.492 6.00844C10.492 8.48463 8.48463 10.492 6.00844 10.492C3.53225 10.492 1.5249 8.48463 1.5249 6.00844C1.5249 3.53225 3.53225 1.5249 6.00844 1.5249C8.48463 1.5249 10.492 3.53225 10.492 6.00844ZM4.25928 7.79764C4.11283 7.65119 4.11283 7.41375 4.25928 7.26731L5.4806 6.04599L4.25925 4.82465C4.11281 4.6782 4.11281 4.44076 4.25925 4.29432C4.4057 4.14787 4.64314 4.14787 4.78958 4.29432L6.01093 5.51566L7.23227 4.29432C7.37871 4.14787 7.61615 4.14787 7.7626 4.29432C7.90904 4.44076 7.90904 4.6782 7.7626 4.82465L6.54125 6.04599L7.76257 7.26731C7.90902 7.41375 7.90902 7.65119 7.76257 7.79764C7.61612 7.94408 7.37869 7.94408 7.23224 7.79764L6.01093 6.57632L4.78961 7.79764C4.64316 7.94408 4.40573 7.94408 4.25928 7.79764Z"
              fill="#FD2D46"
            ></path>
          </svg>
          {error}
        </Text>
      )}
    </>
  );
};
