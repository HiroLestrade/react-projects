import React from "react";
import { useState } from "react";
import TaskUpdate from "./TaskUpdate";
import TaskData from "./TaskData";

export default function TaskRow({task, updateTask, deleteTask, togleTask}) {

    const [edit, setEdit] = useState(task.edit);

    return(
        edit 
            ? <TaskUpdate setEdit={setEdit} task={task} updateTask={updateTask}/> 
            : <TaskData setEdit={setEdit} task={task} deleteTask={deleteTask} togleTask={togleTask}/>
    );

}