import React from "react";

export default function TaskTable({ tasks }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Done</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task) => (
                    <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>
                            <input
                                type="checkbox"
                                value={task.done ? true : false}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
