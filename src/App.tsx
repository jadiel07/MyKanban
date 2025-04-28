import { PlusIcon } from "@radix-ui/react-icons"
import { Box, Heading, Flex, Button } from "@radix-ui/themes"

function App() {

  return (
    <>
    <Box maxWidth="80rem" mx="auto">
      <Box height="4rem">
     <Flex align="center" gap="5" height="100%">
      <Heading as="h1">
        React Kanban
      </Heading>
      <Button>
        <PlusIcon/> Nova tarefa
      </Button>
      </Flex>   
    </Box>
    <Box>
      <Heading as="h2">
        Quadro de Tarefas
      </Heading>
     </Box>
    </Box>
    </>
  )
}

export default App
