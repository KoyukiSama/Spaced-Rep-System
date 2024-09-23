import { getTasks } from "./api";

async function DisplayTasks() {
    try {
        const tasks = await getTasks();
        renderTasks(tasks);
    } catch (error) {
        console.error("Error with displaying tasks: ",error);
    }
}

DisplayTasks();