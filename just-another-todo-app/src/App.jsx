import { useEffect, useState } from "react";
import TaskCreator from "./components/TaskCreator";
import "./App.css";
import TaskTable from "./components/TaskTable";
import useLocalStorage from "./hooks/useLocaleStorage";

function App() {
    /* const [tasks, setTasks] = useState([
      {id: 0, name: "task1", done: false},
      {id: 1, name: "task2", done: false},
      {id: 2, name: "task3", done: false}
    ]); */

    const [tasks, setTasks] = useLocalStorage("JATA-tasks", []);

    const addTask = (taskName) => {
      const newTask = {
        id: tasks.length,
        name: taskName,
        done: false
      };
      setTasks([...tasks, newTask]);
    }

    return (
        <>
          <h1>Just Another ToDo App</h1>
          <TaskCreator addTask = {addTask}/>
          <TaskTable tasks={tasks}/>
        </>
    );
}

export default App;
