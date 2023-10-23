import { Box, Flex, Button, Checkbox, Text } from "@chakra-ui/react";
import { useState } from "react";

export const Buttons = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <Box margin={4}>
        <Text decoration="underline" margin={4}>
          Buttons
        </Text>
        <Flex alignItems="center">
          <Button isDisabled={disabled} size="lg" m={4}>
            Text
          </Button>
          <Button isDisabled={disabled} size="lg" variant="secondary" m={4}>
            Text
          </Button>
          <Button isDisabled={disabled} size="lg" variant="tertiary" m={4}>
            Text
          </Button>
        </Flex>
      </Box>
      <Box margin={5}>
        <Flex alignItems="center">
          <Button isDisabled={disabled} size="md" m={4}>
            Text
          </Button>
          <Button isDisabled={disabled} size="md" variant="secondary" m={4}>
            Text
          </Button>
          <Button isDisabled={disabled} size="md" variant="tertiary" m={4}>
            Text
          </Button>
        </Flex>
      </Box>
      <Box margin={5}>
        <Flex alignItems="center">
          <Button isDisabled={disabled} size="sm" m={4}>
            Text
          </Button>
          <Button isDisabled={disabled} size="sm" variant="secondary" m={4}>
            Text
          </Button>
          <Button isDisabled={disabled} size="sm" variant="tertiary" m={4}>
            Text
          </Button>
        </Flex>
      </Box>
      <Box marginLeft={8}>
        <Checkbox onChange={(e) => setDisabled(e.target.checked)}>
          Disabled
        </Checkbox>
      </Box>
    </>
  );
};
