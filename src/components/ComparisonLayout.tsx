import { Box, Flex, Heading } from "@chakra-ui/react";

type ComparisonChildren = {
  tipalti: React.ReactNode;
  chakra: React.ReactNode;
};

type ComparisonLayoutProps = {
  title: string;
  children: ComparisonChildren;
};

export const ComparisonLayout = ({
  title,
  children,
}: ComparisonLayoutProps) => (
  <Box p={8} w="full">
    <Heading size="lg" mb={6}>
      {title} Component
    </Heading>
    <Flex gap={0} h="full" position="relative">
      <Box flex={1} borderRadius="lg" border="1px" borderColor="gray.200" p={6}>
        <Heading size="md" mb={4}>
          Tipalti
        </Heading>
        {children?.tipalti}
      </Box>
      {/* Vertical divider */}
      <Box
        w="1px"
        bg="gray.200"
        position="absolute"
        left="50%"
        top={0}
        bottom={0}
        transform="translateX(-50%)"
      />
      <Box flex={1} borderRadius="lg" border="1px" borderColor="gray.200" p={6}>
        <Heading size="md" mb={4}>
          ChakraUI
        </Heading>
        {children?.chakra}
      </Box>
    </Flex>
  </Box>
);
