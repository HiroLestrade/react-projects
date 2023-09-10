import React from "react";

export default function TaskData({ task, deleteTask, togleTask, setEdit}) {
    

    const habndleCheckbox = () => {
        togleTask(task.id);
    };

    const handleClickEdit = () => {
        setEdit(true);
    };

    const handleClickDelete = () => {
        deleteTask(task.id);
    };

    return (
        <tr>
            <td>{task.id}</td>
            <td>{task.name}</td>
            <td>{task.desc}</td>
            <td>
                <button onClick={handleClickEdit}>Edit</button>
            </td>
            <td>
                <button onClick={handleClickDelete}>Delete</button>
            </td>
            <td>
                <input type="checkbox" onChange={habndleCheckbox} checked={task.done}/>
            </td>
        </tr>
    );
}
