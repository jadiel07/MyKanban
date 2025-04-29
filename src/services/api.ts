import { Task } from "../entities/Task";

console.log("API_URL ->", import.meta.env.VITE_API_URL);

export const tasksService = {
    async fetchTasks (): Promise<Task[]> {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks`)
        const data: Task[] = await response.json()
        return data
    },
    async createTask(atributtes: Omit<Task, "id">): Promise<Task>{
   const response = await fetch(`${import.meta.env.VITE_API_URL}/tasks}`,{
    method:"POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(atributtes)
   })
   const newTask: Task= await response.json()
   return newTask
},

  async updateTask(id:string, atributtes:Partial<Omit<Task, "id">> ): Promise <Task>{ 

    const response = await fetch (`${import.meta.env.VITE_API_URL}/tasks/${id}`,{
      method:"PATCH", 
      headers: {
        "Content-Type": "application/JSON"
      },
      body: JSON.stringify(atributtes)
    })
    const updateTask: Task = await response.json()
    return updateTask
  },

  async deleteTask(id:string): Promise<void>
{
    await fetch (`${import.meta.env.VITE_API_URL}/tasks/${id}`), {
        method: "DELETE"
    }
}
}
