import { Box, Text, Separator } from "@chakra-ui/react";
import { ComparisonLayout } from "../components/ComparisonLayout";
import { ChakraButton } from "../components/chakra/Button";
import { TipSwitch } from "@tipalti/react-switch";
import { ChakraSwitch } from "../components/chakra/Switch";

const Tipalti = () => {
  return (
    <Box>
      <Box mb="3">
        <Text>Switch</Text>
        <TipSwitch />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3">
        <Text>Switch Checked</Text>
        <TipSwitch checked />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3">
        <Text>Switch Disabled</Text>
        <TipSwitch disabled />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3">
        <Text>Switch Small</Text>
        <TipSwitch size="small" />
      </Box>
      <Separator mt="3" mb="3" />

      <Box mb="3">
        <Text>Switch With Label</Text>
        <TipSwitch label="Label: " />
      </Box>
      <Separator mt="3" mb="3" />
    </Box>
  );
};

const Chakra = () => {
  return (
    <Box>
      <Box mb="3">
        <Text>Switch With Label</Text>
        <ChakraSwitch />
      </Box>
      <Separator mt="3" mb="3" />
    </Box>
  );
};
export const Switch = () => (
  <ComparisonLayout title="Button">
    {{
      tipalti: <Tipalti />,
      chakra: <Chakra />,
    }}
  </ComparisonLayout>
);
