import React, { useState}from 'react';
import uuid from 'uuid';

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
            addTodo({...todo, id: uuid.v4()a})
        }
    }

    return (
        <form>
            <input name="task" type="text" value={todo.task}
                onChange={handleTaskInputChange}
            />
            <button type='submit'/>
      </form>
    )
}
