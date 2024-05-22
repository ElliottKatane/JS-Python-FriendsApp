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
  useToast,
} from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";
import { useState } from "react";
import { BASE_URL } from "../App";

const CreateUserModal = ({ setUsers }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    role: "",
    description: "",
    gender: "",
  });
  const toast = useToast();

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(BASE_URL + "/friends", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong!");
      }
      toast({
        title: "Yayy! 🎉",
        description: "Your new friend has been added.",
        status: "success",
        duration: 2000,
        position: "top-center",
        isClosable: true,
      });
      onClose();
      // we don't refresh the page, but we add the new user to the list
      setUsers((prev) => [...prev, data]);
      setInputs({ name: "", role: "", description: "", gender: "" }); // clear inputs
    } catch (error) {
      console.error(error);
      toast({
        title: "Oops! 😢",
        description: error.message,
        status: "error",
        duration: 2000,
        position: "top-center",
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Button onClick={onOpen}>
        <BiAddToQueue size={20} />{" "}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <form onSubmit={handleCreateUser}>
          <ModalContent>
            <ModalHeader> My new BFF</ModalHeader>
            <ModalCloseButton />

            <ModalBody pb={6}>
              <Flex alignItems={"center"} gap={4}>
                {/* name */}
                <FormControl>
                  Full Name
                  <FormLabel>
                    <Input
                      placeholder={"John Doe"}
                      value={inputs.name}
                      onChange={(e) =>
                        setInputs({ ...inputs, name: e.target.value })
                      }
                    />
                  </FormLabel>
                </FormControl>
                {/* Description, left */}
                <FormControl>
                  Full Name
                  <FormLabel>
                    {" "}
                    Role
                    <Input
                      placeholder={"Software Engineer"}
                      value={inputs.role}
                      onChange={(e) =>
                        setInputs({ ...inputs, role: e.target.value })
                      }
                    />
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
                    value={inputs.description}
                    onChange={(e) =>
                      setInputs({ ...inputs, description: e.target.value })
                    }
                  />{" "}
                </FormLabel>
              </FormControl>
              <RadioGroup defaultValue="Male" mt={4}>
                <Flex gap={5}>
                  <Radio
                    value="male"
                    onChange={(e) =>
                      setInputs({ ...inputs, gender: e.target.value })
                    }
                  >
                    {" "}
                    male
                  </Radio>
                  <Radio
                    value="female"
                    onChange={(e) =>
                      setInputs({ ...inputs, gender: e.target.value })
                    }
                  >
                    {" "}
                    female
                  </Radio>
                </Flex>
              </RadioGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme={"blue"}
                mr={3}
                type="submit"
                isLoading={isLoading}
              >
                {" "}
                Add{" "}
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default CreateUserModal;
