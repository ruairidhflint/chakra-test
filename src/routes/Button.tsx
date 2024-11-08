import { Box, Text, Separator } from "@chakra-ui/react";
import { ComparisonLayout } from "../components/ComparisonLayout";
import { ChakraButton } from "../components/chakra/Button";
import { TipButton } from "@tipalti/react-button";

const Tipalti = () => {
  return (
    <Box>
      <Box mb="3">
        <Text>Primary Button</Text>
        <TipButton variant="primary" content="Button" />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3">
        <Text>Secondary Button</Text>
        <TipButton variant="secondary" content="Button" />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3">
        <Text>Action Primary Button</Text>
        <TipButton variant="actionPrimary" content="Button" />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3">
        <Text>Small Primary Button</Text>
        <TipButton variant="primary" size="small" content="Button" />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3">
        <Text>Large Button</Text>
        <TipButton variant="primary" size="large" content="Button" />
      </Box>
      <Separator mt="3" mb="3" />
    </Box>
  );
};

const Chakra = () => {
  return (
    <Box>
      <Box mb="3">
        <Text>Primary Button</Text>
        <ChakraButton customVariant="primary">Button</ChakraButton>
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3">
        <Text>Secondary Button</Text>
        <ChakraButton customVariant="secondary">Button</ChakraButton>
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3">
        <Text>Action Primary Button</Text>
        <ChakraButton customVariant="action">Button</ChakraButton>
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3">
        <Text>Small Primary Button</Text>
        <ChakraButton size="sm">Button</ChakraButton>
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3">
        <Text>Large Button</Text>
        <ChakraButton size="lg">Button</ChakraButton>
      </Box>
      <Separator mt="3" mb="3" />
    </Box>
  );
};
export const Button = () => (
  <ComparisonLayout title="Button">
    {{
      tipalti: <Tipalti />,
      chakra: <Chakra />,
    }}
  </ComparisonLayout>
);
