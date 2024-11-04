import { Box, Text, Separator } from "@chakra-ui/react";
import { ComparisonLayout } from "../components/ComparisonLayout";
import { TipTextarea } from "@tipalti/react-textarea";
const Tipalti = () => {
  return (
    <Box>
      <Box mb="3" w="50%">
        <Text mb="1">Default TextArea</Text>
        <TipTextarea label="Custom Label" placeholder="Enter text..." />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">Secondary TextArea</Text>
        <TipTextarea
          label="Custom Label"
          placeholder="Enter text..."
          variant="secondary"
        />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">TextArea with Char Count</Text>
        <TipTextarea
          label="Custom Label"
          placeholder="Enter text..."
          countchars={true}
          maxlength={100}
        />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">Disabled Input</Text>
        <TipTextarea
          label="Custom Label"
          placeholder="Enter text..."
          disabled
        />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">TextArea with Error</Text>
        <TipTextarea
          label="Custom Label"
          placeholder="Enter text..."
          errors={["Error message"]}
        />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3" w="50%">
        <Text mb="1">Required TextArea</Text>
        <TipTextarea
          label="Custom Label"
          placeholder="Enter text..."
          fieldmode="required"
        />
      </Box>
    </Box>
  );
};

export const TextArea = () => (
  <ComparisonLayout title="Input">
    {{
      tipalti: <Tipalti />,
      chakra: <Box>Chakra Input Implementation</Box>,
    }}
  </ComparisonLayout>
);
