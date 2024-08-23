import React from 'react';

export const TodoItem = ({ task, deleteTask, toggleCompleted }) => {
    const handleChange = () => {
        toggleCompleted(task.id)
    }

    console.log(task);
    

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={task?.completed}
                onChange={handleChange}
            />
            <p>{task?.text}</p>
            <button onClick={() => deleteTask(task.id)}>
                X
            </button>
        </div>
    )
}