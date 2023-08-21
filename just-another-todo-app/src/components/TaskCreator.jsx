import React from "react";
import { useState } from "react";

export default function TaskCreator(props) {
    const [newTask, setNewTask] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addTask(newTask);
        setNewTask("");
    };

    const handleChange = (event) => {
        setNewTask(event.target.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="New task"
                    onChange={handleChange}
                    value={newTask}
                />
                <button type="submit">Save task</button>
            </form>
        </>
    );
}
