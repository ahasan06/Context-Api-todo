/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import { createContext , useState } from "react";
import App from '../App';

export const todoContext = createContext();

const TodoProvider = (props) => {

    const currentDate = new Date();
    const [isCompletedScreen, setIscompletedScreen] = useState(false);
  
    // const [notetitle,setNoteTitle] = useState("");
    // const [noteDesc,setnoteDesc] = useState("");
  
    const [formObj, setFormObj] = useState({ noteTitle: "", noteDesc: "", noteCheck: false })
  
    const [notes, setNotes] = useState([
      // { id: "1", title: "Note1", desc: "Description1", check: false },
      // { id: "2", title: "Note2", desc: "Description2", check: false },
      // { id: "3", title: "Note3", desc: "Description3", check: false },
      // { id: "4", title: "Note4", desc: "Description4", check: false }
    ])
  
    const [completeNote, setCompleteNote] = useState([
  
    ])
  
  
    const [editMode, setEditMode] = useState(false);
    const [editItem, setEditItem] = useState(null);
  
  
    const inputOnChange = (property, value) => {
      setFormObj(prevObj => ({
        ...prevObj,
        [property]: value
      }))
    }
  
    const formSubmitHandler = (event) => {
      event.preventDefault();
  
      if (formObj.noteTitle.trim() === "" || formObj.noteDesc.trim() === "") {
        alert("Input Field should not be empty!");
      }
      else {
        editMode === true ? updateEditHandler() : createFormHandler();
      }
  
  
    }
  
    const createFormHandler = () => {
      const newNote = {
        id: Date.now().toString(),
        title: formObj.noteTitle,
        desc: formObj.noteDesc,
        check: false
  
      }
      setNotes([...notes, newNote])
      setFormObj({
        noteTitle: "",
        noteDesc: ""
      })
    }
  
    const updateEditHandler = () => {
  
      const updateList = notes.map((note) => {
        if (note.id === editItem) {
          return { ...note, title: formObj.noteTitle, desc: formObj.noteDesc }
        }
        return note
      });
  
      setNotes(updateList);
      setEditMode(false);
      setEditItem(null);
      setFormObj({
        noteTitle: "",
        noteDesc: ""
      });
    }
  
  
    const removeHandler = (noteId) => {
      console.log(noteId);
      const updatedNotes = notes.filter((notes) => {
        if (notes.id !== noteId) {
          return notes
        }
  
      })
      setNotes(updatedNotes);
      const completedNotes = updatedNotes.filter(note => note.check);
      setCompleteNote(completedNotes);
    }
  
    const editHandler = (note) => {
      console.log(note);
      setEditMode(true);
      setEditItem(note.id);
      setFormObj({
        noteTitle: note.title,
        noteDesc: note.desc
      });
    }
  
    const checkHandler = (noteId) => {
      const updatedNotes = notes.map((note) => {
        if (note.id === noteId) {
          return { ...note, check: !note.check };  // Toggle the check status
        }
  
        return note;
      });
      // console.log(updatedNotes);
      setNotes(updatedNotes);
  
      // store only checked note into the completeNote array
      const completedNotes = updatedNotes.filter(note => note.check);
      setCompleteNote(completedNotes);
      console.log(completeNote);
  
  
    };





    const toDoValue ={
        currentDate,
        isCompletedScreen,
        setIscompletedScreen,

        formObj,
        setFormObj,

        notes,
        setNotes,

        completeNote,
        setCompleteNote,

        editItem,
        setEditItem,

        editMode,
        setEditMode,
        
        // function declare below
        inputOnChange,
        formSubmitHandler,
        createFormHandler,
        removeHandler,
        editHandler,
        checkHandler,


    };

    return (
     	<todoContext.Provider value={toDoValue}>
			{props.children}
		</todoContext.Provider>
    );
};

export default TodoProvider