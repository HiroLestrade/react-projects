import React from "react";
import { useState } from "react";

export default function TaskUpdate({ task, updateTask, setEdit }) {
    const [newTaskName, setNewTaskName] = useState(task.name);
    const [newTaskDesc, setNewTaskDesc] = useState(task.desc);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateTask(task.id, newTaskName, newTaskDesc);
        setNewTaskName("");
        setNewTaskDesc("");
        setEdit(false);
    };

    const handleChangeName = (event) => {
        setNewTaskName(event.target.value);
    };

    const handleChangeDesc = (event) => {
        setNewTaskDesc(event.target.value);
    };

    return (
        <tr>
            <td>{task.id}</td>
            <td colSpan={3}>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="New task name"
                        onChange={handleChangeName}
                        value={newTaskName}
                    />
                    <input
                        type="text"
                        placeholder="New description"
                        onChange={handleChangeDesc}
                        value={newTaskDesc}
                    />
                    <button type="submit">done</button>
                </form>
                
            </td>
        </tr>
    );
}
