import { useEffect, useState } from "react";
import TaskCreator from "./components/TaskCreator";
import "./App.css";
import TaskTable from "./components/TaskTable";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      console.log(tasks);
    }, [tasks]);

    const addTask = (taskName) => {
      const newTask = {
        name: taskName,
        done: false
      };
      setTasks([...tasks, newTask]);
    }

    return (
        <>
          <h1>Just Another ToDo App</h1>
          <TaskCreator addTask = {addTask}/>
          <TaskTable />
        </>
    );
}

export default App;
