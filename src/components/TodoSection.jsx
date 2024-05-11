import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoSection = () => {
    return (
        <div className='todo-wrapper'>
            <TodoForm/>
            <TodoList/>
        </div>
    );
};

export default TodoSection;