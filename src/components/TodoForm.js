import React, { useState}from 'react';
import uuid from 'uuid/v4';
// import { v4 as uuidv4 } from 'uuid ';
import { v4 as uuidv4 } from 'uuid'

export default function TodoForm( addTodo) {
    const [todo, setTodo] = useState({
        id: '',
        task: '',
        completed: false,
    })

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value  })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid.v4() })
            setTodo({ ...todo, task: ''})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="task" type="text" value={todo.task}
                onChange={handleTaskInputChange}
            />
            <button type='submit'/>
      </form>
    )
}
