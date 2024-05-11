import React from 'react';
import { useContext } from "react";
import { todoContext } from '../contexts/Todo';


const TodoList = () => {

  const {isCompletedScreen,setIscompletedScreen,editItem,checkHandler,notes,currentDate,removeHandler,editHandler,completeNote,} = useContext(todoContext);
  return (
    <div>
        <div className="btn-area">
          <button className={`secondaryBtn ${!isCompletedScreen && 'active'}`} onClick={() => setIscompletedScreen(false)}>Todo</button>
          <button className={`secondaryBtn ${isCompletedScreen && 'active'}`} onClick={() => setIscompletedScreen(true)}>Completed</button>
        
        </div>


        <div className="todo-list">
          {!isCompletedScreen ? notes.map((note) => (
            <div className={`todo-list-item ${note.check ? 'checked' : ''}${editItem === note.id ? 'todo-edit-item' : ''}`} key={note.id}>
              <div className="todo-list-item-desc">
                
                <div className='list-input-container'>
                  <input className='list-input' type="checkbox" checked={note.check} onChange={() => checkHandler(note.id)} />
                  <span className="checkmark"></span>
                </div>


                <small className='time-date' >{currentDate.toLocaleString()}</small>
                <h3>{note.title} </h3>
                <p>{note.desc}</p>

              </div>
              <div className="todo-list-item-icon">
                <button value={note.id} onClick={() => removeHandler(note.id)} className='delete-icon'>Delete</button>
                <button value={note.id} onClick={() => editHandler(note)} className='check-icon'>Edit</button>

              </div>
            </div>
          )) : completeNote.map((note) => (
            <div className={`todo-list-item ${note.check ? 'checked' : ''}${editItem === note.id ? 'todo-edit-item' : ''}`} key={note.id}>
              <div className="todo-list-item-desc">

                <div className='list-input-container'>
                  <input className='list-input' type="checkbox" checked={note.check} onChange={() => checkHandler(note.id)} />
                  <span className="checkmark"></span>
                </div>

                <small className='time-date' >{currentDate.toLocaleString()}</small>
                <h3>{note.title} </h3>
                <p>{note.desc}</p>

              </div>
              <div className="todo-list-item-icon">
                <button value={note.id} onClick={() => removeHandler(note.id)} className='delete-icon'>Delete</button>
                {/* <button value={note.id} onClick={() => editHandler(note)} className='check-icon'>Edit</button> */}

              </div>
            </div>
          ))
          }
        </div>
    </div>
  );
};

export default TodoList;