import { Box, Heading, Flex } from "@radix-ui/themes";
import { CreateTaskForm } from "./components/CreateTaskForm";
import "@radix-ui/themes/styles.css";
import { TaskBoard } from "./components/TaskBoard";
import { TasksContextProvider } from "./contexts/TasksContext";

function App() {
  return (
   <TasksContextProvider>

    <Box maxWidth="80rem" mx="auto">
      <Box height="4rem">
        <Flex align="center" gap="5" height="100%">
          <Heading as="h1">React Kanban</Heading>
          <CreateTaskForm />
        </Flex>
      </Box>
      <Box>
        <Heading as="h2" mb={"4"}>Quadro de Tarefas</Heading>
        <TaskBoard/>
      </Box>
    </Box>
   </TasksContextProvider>
  );
}

export default App;
