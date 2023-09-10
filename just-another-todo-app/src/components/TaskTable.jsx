import React from "react";
import TaskRow from "./TaskRow";

export default function TaskTable({ tasks, updateTask, deleteTask, togleTask }) {
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Task</th>
                    <th>Description</th>
                    <th>Done</th>
                </tr>
            </thead>

            <tbody>
                {tasks.map((task) => (
                    <TaskRow task={task} updateTask={updateTask} deleteTask={deleteTask} togleTask={togleTask} />
                ))}
            </tbody>
        </table>
    );
}
