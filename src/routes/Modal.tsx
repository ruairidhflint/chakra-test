import { Box, Separator, Text } from "@chakra-ui/react";
import { ComparisonLayout } from "../components/ComparisonLayout";
import { TipButton } from "@tipalti/react-button";
import { TipModal } from "@tipalti/react-modal";
import { useState } from "react";

const Tipalti = () => {
  const [openModal, setOpenModal] = useState<number | null>(null);
  return (
    <Box>
      <Box mb="3">
        <Text>Default Modal</Text>
        <TipButton
          variant="primary"
          content="Click Me"
          onClick={() => setOpenModal(1)}
        />
        <TipModal
          onclose={() => setOpenModal(null)}
          open={openModal === 1}
          overlay="transarent"
          buttons={[
            {
              content: "OK",
              variant: "primary",
              // @ts-expect-error temporary
              onClick: () => setOpenModal(null),
            },
            {
              content: "Cancel",
              variant: "secondary",
              // @ts-expect-error temporary
              onClick: () => setOpenModal(null),
            },
          ]}
        />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3">
        <Text>Modal with Backdrop</Text>
        <TipButton
          variant="primary"
          content="Click Me"
          onClick={() => setOpenModal(2)}
        />
        <TipModal
          onclose={() => setOpenModal(null)}
          open={openModal === 2}
          overlay="visible"
          buttons={[
            {
              content: "OK",
              variant: "primary",
              // @ts-expect-error temporary
              onClick: () => setOpenModal(null),
            },
            {
              content: "Cancel",
              variant: "secondary",
              // @ts-expect-error temporary
              onClick: () => setOpenModal(null),
            },
          ]}
        />
      </Box>
      <Separator mt="3" mb="3" />
      <Box mb="3">
        <Text>Modal with Prevent Blur Close</Text>
        <TipButton
          variant="primary"
          content="Click Me"
          onClick={() => setOpenModal(1)}
        />
        <TipModal
          preventblurclose
          onclose={() => setOpenModal(null)}
          open={openModal === 1}
          overlay="visible"
          buttons={[
            {
              content: "OK",
              variant: "primary",
              // @ts-expect-error temporary
              onClick: () => setOpenModal(null),
            },
            {
              content: "Cancel",
              variant: "secondary",
              // @ts-expect-error temporary
              onClick: () => setOpenModal(null),
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export const Modal = () => (
  <ComparisonLayout title="Modal">
    {{
      tipalti: <Tipalti />,
      chakra: <Box>Chakra Modal Implementation</Box>,
    }}
  </ComparisonLayout>
);
