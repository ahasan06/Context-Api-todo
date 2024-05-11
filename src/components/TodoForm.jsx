import React from 'react';
import { useContext } from "react";
import { todoContext } from '../contexts/Todo';


const TodoForm = () => {

    const  {formSubmitHandler,formObj,inputOnChange,editMode} = useContext(todoContext);


    return (
        <div>
            <form onSubmit={formSubmitHandler} >
                <div className="todo-input">
                    <div className="todo-input-item">

                        <label htmlFor="title" >Title</label>
                        <input id="title" type="text" value={formObj.noteTitle} onChange={(e) => inputOnChange("noteTitle", e.target.value)} placeholder='Add Your Task' />
                    </div>

                    <div className="todo-input-item">

                        <label htmlFor="description">Description</label>
                        <input id="description" type="text" value={formObj.noteDesc} onChange={(e) => (inputOnChange("noteDesc", e.target.value))} placeholder='Add Your Description' />
                    </div>

                    <div className="todo-input-item">
                        <button type='submit' className='primaryBtn'>{editMode ? "Update Task" : "Add Task"}</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TodoForm;