import React, {useState} from 'react';
import {ToDo} from './ToDo.jsx';
import {AddToDoButton} from './AddToDoButton.jsx';

export function App() {
    const [currentToDos, updatedToDos] = useState([
        {note: 'An example ToDo', unique: 1, done: false},
        ]);
    const updateDoneState = ({unique, done}) => {
        const changedToDos = currentToDos.map(todo => {
            if (unique === todo.unique) {
                return {...todo, done: done}
            }
            return todo;
        });

        updatedToDos(changedToDos);
    };


    const updateNoteState = ({unique, note}) => {
        const changedToDos = currentToDos.map(todo => {
            if (unique === todo.unique) {
                return {...todo, note: note}
            }
            return todo;
        });

        updatedToDos(changedToDos);
    };

    const generateUniqueID = (todos) => todos.pop().unique + 1;

    const addANewToDo = () => {
        const newTodos = [...currentToDos, {note: 'New todo', unique: generateUniqueID(currentToDos), done: false}];
        updatedToDos(newTodos);
    };

    return (
        <div className="body">
            <h1 className="H1">To Do</h1>
            <br/>
            {<AddToDoButton addToDo={addANewToDo}/>}
            <br/>
            <br/>
            {currentToDos.map(todo => <ToDo todo={todo} doneChanged={updateDoneState} noteChanged={updateNoteState}/>)}
        </div>
    )
}
