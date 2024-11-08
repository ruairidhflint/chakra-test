import { Box, Text, Separator } from "@chakra-ui/react";
import { ComparisonLayout } from "../components/ComparisonLayout";
import { TipInput } from "@tipalti/react-input";
import { ChakraInput } from "../components/chakra/Input";

const Tipalti = () => {
  return (
    <Box>
      <Box mb="3" w="50%">
        <Text mb="1">Default Input</Text>
        <TipInput label="Input Label" placeholder="Placeholder text..." />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">Input with Icon</Text>
        <TipInput
          label="Input Label"
          placeholder="Placeholder text..."
          endicon={{ iconclass: "far fa-search" }}
        />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">Disabled Input</Text>
        <TipInput
          label="Input Label"
          placeholder="Placeholder text..."
          disabled
        />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">Input with Error</Text>
        <TipInput
          label="Input Label"
          placeholder="Placeholder text..."
          status="error"
          footeroptions={{ text: { content: "Error message" } }}
        />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">Required Input</Text>
        <TipInput
          label="Input Label"
          placeholder="Placeholder text..."
          fieldmode="required"
        />
      </Box>
    </Box>
  );
};
const Chakra = () => {
  return (
    <Box>
      <Box mb="3" w="50%">
        <Text mb="1">Default Input</Text>
        <ChakraInput />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">Input with Icon</Text>
        <ChakraInput />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">Disabled Input</Text>
        <ChakraInput />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">Input with Error</Text>
        <ChakraInput />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">Required Input</Text>
        <ChakraInput />
      </Box>
    </Box>
  );
};

export const Input = () => (
  <ComparisonLayout title="Input">
    {{
      tipalti: <Tipalti />,
      chakra: <Chakra />,
    }}
  </ComparisonLayout>
);
