import React from "react";
import { useState } from "react";

export default function TaskCreate({addTask}) {
    const [newTaskName, setNewTaskName] = useState("");
    const [newTaskDesc, setNewTaskDesc] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        createTask(newTaskName, newTaskDesc);
        setNewTaskName("");
        setNewTaskDesc("");
    };

    const handleChangeName = (event) => {
        setNewTaskName(event.target.value);
    };

    const handleChangeDesc = (event) => {
        setNewTaskDesc(event.target.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="New task"
                    onChange={handleChangeName}
                    value={newTaskName}
                />
                <input
                    type="text"
                    placeholder="Description"
                    onChange={handleChangeDesc}
                    value={newTaskDesc}
                />
                <button type="submit">&#128190;</button>
            </form>
        </>
    );
}
