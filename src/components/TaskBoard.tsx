import { Badge, Flex, Grid } from "@radix-ui/themes"
import { Task } from "../entities/Task"

export const TaskBoard: React.FC = () => {
 
    const taskTodo: Task[ ] = [ {
        "id" : 1,
        "title" : "enviar relatorio",
        "description": "enviar o relatorio semanal",
        "status": "todo",
        "priority": "high"

    }]
    const tasksInProgress: Task[] = [ {
        "id" : 5,
        "title" : "enviar relatorio",
        "description": "enviar o relatorio semanal",
        "status": "doing",
        "priority": "high"

    }]
    const tasksDone: Task[] = [
        {
            "id" : 3,
            "title" : "enviar relatorio",
            "description": "enviar o relatorio semanal",
            "status": "done",
            "priority": "high"

        }
    ]


    return(
        <Grid columns={"3"} gap={"4"} minWidth={"64rem"}>
        <Flex direction="column" gap="4">
         <Badge size={"3"} color="gray">
            Para fazer (2)
         </Badge>
        </Flex>

        <Flex direction="column" gap="4">
         <Badge size={"3"} color="yellow">
            Em progresso (2)
         </Badge>
        </Flex>

        <Flex direction="column" gap="4">
         <Badge size={"3"} color="green">
            Concluida (2)
         </Badge>
        </Flex>
        </Grid>
    )
}