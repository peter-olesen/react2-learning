import { useState } from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Git gud',
            completed: true
        },
        {
            id: 2,
            text: 'Learn React',
            completed: false
        }
    ])

    const [text, setText] = useState('')

    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        }

        setTasks([...tasks, newTask])
        setText('')
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const toggleCompleted = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {...task, completed: !task.completed}
            } else {
                return task
            }
        }))
    }

    return (
        <div className="todo-list">
            {tasks.map(task => (
                <TodoItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleCompleted={toggleCompleted}
                />
            ))}
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => addTask(text)}>Add</button>
        </div>
    )
}