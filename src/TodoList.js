import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodos] = useState([]);

    //This code basically avoids multiple spaces and non-letters 
    const addTodo = todo => {
          if (!todo.text || /^\s*$/.test(todo.text)) {
              return
          }
          const newTodos = [todo, ...todos]

          setTodos(newTodos);
    };

    //Edit todo function
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item )))
    };


    //This will check todo from the list, if matched it'll remove it
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    };

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (
        <div>
            <h1> Welcome! Enter Tasks for Today</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} 
            removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList;
