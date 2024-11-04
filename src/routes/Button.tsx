import { Box, Text, Separator } from "@chakra-ui/react";
import { ComparisonLayout } from "../components/ComparisonLayout";
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
      <Box mb="3">
        <Text>Loading Button</Text>
        <TipButton variant="primary" loading={true} content="Button" />
      </Box>
    </Box>
  );
};

export const Button = () => (
  <ComparisonLayout title="Button">
    {{
      tipalti: <Tipalti />,
      chakra: <Box>Chakra Button Implementation</Box>,
    }}
  </ComparisonLayout>
);
