import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  useDisclosure,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  RadioGroup,
  Radio,
  ModalFooter,
} from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";

const CreateUserModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>
        <BiAddToQueue size={20} />{" "}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> My new BFF</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex alignItems={"center"} gap={4}>
              {/* name */}
              <FormControl>
                Full Name
                <FormLabel>
                  <Input placeholder={"John Doe"} />{" "}
                </FormLabel>
              </FormControl>
              {/* Description, left */}
              <FormControl>
                Full Name
                <FormLabel>
                  {" "}
                  Role
                  <Input placeholder={"Software Engineer"} />
                </FormLabel>
              </FormControl>
              {/* Role right */}
            </Flex>
            <FormControl>
              Description
              <FormLabel>
                <Textarea
                  resize={"none"}
                  overflow={"hidden"}
                  placeholder={"Software Engineer"}
                />{" "}
              </FormLabel>
            </FormControl>
            <RadioGroup defaultValue="Male" mt={4}>
              <Flex gap={5}>
                <Radio value="male"> male</Radio>
                <Radio value="female"> female</Radio>
              </Flex>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme={"blue"} mr={3}>
              {" "}
              Add{" "}
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateUserModal;
