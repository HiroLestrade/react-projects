import TaskCreate from "./components/TaskCreate";
import TaskTable from "./components/TaskTable";
import useLocalStorage from "./hooks/useLocaleStorage";
import "./App.css";

function App() {
    const [tasks, setTasks] = useLocalStorage("JATA-tasks", []);

    const createTask = (taskName, taskDesc) => {
        if (taskName !== "" && taskDesc !== "") {
            const newTask = {
                id: tasks.length,
                name: taskName,
                desc: taskDesc,
                done: false,
            };
            setTasks([...tasks, newTask]);

            console.log("Task created");
        }
        else{
          console.log("Empty task, enter a task name and description");
        }
    };

    const updateTask = (id, newName, newDesc) => {
        const temp = [...tasks];
        const item = temp.find((item) => item.id === id);
        item.name = newName;
        item.desc = newDesc;
        item.edit = false;
        setTasks(temp);

        console.log("Task updated");
    };

    const deleteTask = (id) => {
        const temp = tasks.filter((item) => item.id !== id);
        setTasks(temp);

        console.log("Task deleted");
    };

    const togleTask = (id) => {
        const temp = [...tasks];
        const item = temp.find((item) => item.id === id);
        item.done = !item.done;
        setTasks(temp);

        console.log(item.done ? "done!" : "undone...");
    };

    return (
        <>
            <h1>Just Another ToDo App</h1>
            <TaskCreate createTask={createTask} />
            <TaskTable
                tasks={tasks}
                updateTask={updateTask}
                deleteTask={deleteTask}
                togleTask={togleTask}
            />
        </>
    );
}

export default App;
