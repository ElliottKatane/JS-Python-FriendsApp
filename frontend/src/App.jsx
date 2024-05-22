import { Stack, Container, Text } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import UserGrid from "./components/UserGrid";

export const BASE_URL = "http://localhost:5000/api";
function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  // we could use context, zustand, redux, etc. to manage state
  // but for this simple app, we'll just pass the state and setState
  return (
    <Stack minH={"100vh"}>
      <Navbar setUsers={setUsers} />
      <Container maxW={"1200px"} my={4}>
        <Text
          fontSize={{ base: "3xl", md: "50" }}
          fontWeight={"bold"}
          letterSpacing={"2px"}
          textTransform={"uppercase"}
          textAlign={"center"}
          mb={8}
        >
          <Text
            as={"span"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
          >
            My Besties
          </Text>
          🚀
        </Text>

        <Text fontSize={"3xl"} textAlign={"center"} mt={4}></Text>
        <UserGrid users={users} setUsers={setUsers} />
      </Container>
    </Stack>
  );
}

export default App;
