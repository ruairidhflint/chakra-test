import { Box, Text, Separator } from "@chakra-ui/react";
import { ComparisonLayout } from "../components/ComparisonLayout";
import { TipTextarea } from "@tipalti/react-textarea";
import { ChakraTextarea } from "../components/chakra/TextArea";

const Tipalti = () => {
  return (
    <Box>
      <Box mb="3" w="50%">
        <Text mb="1">Default Textarea</Text>
        <TipTextarea label="Textarea Label" placeholder="Placeholder text..." />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">Disabled Textarea</Text>
        <TipTextarea
          label="Textarea Label"
          placeholder="Placeholder text..."
          disabled
        />
      </Box>

      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">Required Textarea</Text>
        <TipTextarea
          label="Textarea Label"
          placeholder="Placeholder text..."
          fieldmode="required"
        />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">Textarea with Error</Text>
        <TipTextarea
          label="Textarea Label"
          placeholder="Placeholder text..."
          errors={["Error message"]}
        />
      </Box>
    </Box>
  );
};

const Chakra = () => {
  return (
    <Box>
      <Box mb="3" w="50%">
        <Text mb="1">Default Textarea</Text>
        <ChakraTextarea />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">Disabled Textarea</Text>
        <ChakraTextarea disabled />
      </Box>

      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">Required Textarea</Text>
        <ChakraTextarea required />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">Textarea with Error</Text>
        <ChakraTextarea error="Error message" />
      </Box>
    </Box>
  );
};

export const TextArea = () => (
  <ComparisonLayout title="Textarea">
    {{
      tipalti: <Tipalti />,
      chakra: <Chakra />,
    }}
  </ComparisonLayout>
);
