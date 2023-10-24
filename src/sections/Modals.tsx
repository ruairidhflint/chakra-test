import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export const Modals = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text decoration="underline" margin={8}>
        Modal
      </Text>
      <Box ml={8}>
        <Button size="md" onClick={onOpen}>
          Click me!
        </Button>
      </Box>
      <Modal
        size="xs"
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text my={4}>Please add content to this modal</Text>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button>Ok</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
