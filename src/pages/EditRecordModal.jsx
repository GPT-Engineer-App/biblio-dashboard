import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { FaSave } from "react-icons/fa";

const EditRecordModal = ({ isOpen, onClose, record, setRecord }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecord((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Record</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input name="title" value={record?.title || ""} onChange={handleInputChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Publication</FormLabel>
              <Input name="publication" value={record?.publication || ""} onChange={handleInputChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Authors</FormLabel>
              <Input name="authors" value={record?.authors || ""} onChange={handleInputChange} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Abstract</FormLabel>
              <Textarea name="abstract" value={record?.abstract || ""} onChange={handleInputChange} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button leftIcon={<FaSave />} colorScheme="blue" type="submit">
              Save Changes
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default EditRecordModal;
