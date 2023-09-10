import React from "react";
import TaskUpdate from "./TaskUpdate";
import TaskData from "./TaskData";

export default function TaskRow({task, updateTask, deleteTask, togleTask}) {

    return(
        <tr>
            task.edit 
                ? <TaskUpdate updateTask={updateTask}/> 
                : <TaskData task={task} deleteTask={deleteTask} togleTask={togleTask}/>
        </tr>
    );

}