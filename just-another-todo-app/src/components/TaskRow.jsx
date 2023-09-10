import React from "react";

export default function TaskRow({task, updateTask, deleteTask, togleTask}) {

    return(
        <tr key={task.id}>
            task.edit 
                ? <TaskUpdate /> 
                : <TaskData />
            <button>&#x1F5D1;</button>
            <button>&#x270F;</button>
        </tr>
    );

}