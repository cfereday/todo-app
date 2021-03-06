import React, {useState} from 'react';
import {ToDo} from './ToDo.jsx';
import {AddToDoButton} from './AddToDoButton.jsx';
import '../styles/style.sass';

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

    const removeToDo = (unique) => {
        const notRemoved = currentToDos.filter(todo => unique !== todo.unique);
        updatedToDos(notRemoved);
    };

    const generateUniqueID = (todos) => todos.length === 0 ? 1 : todos.pop().unique + 1;

    const addANewToDo = () => {
        const newTodos = [...currentToDos, {note: 'New todo', unique: generateUniqueID(currentToDos), done: false}];
        updatedToDos(newTodos);
    };

    return (
        <div className="body">
            <h1 className="H1">To Do</h1>
            {<AddToDoButton addToDo={addANewToDo}/>}
            {currentToDos.map(todo => <ToDo key={todo.unique} todo={todo} doneChanged={updateDoneState} noteChanged={updateNoteState} deleteTodo={removeToDo}/>)}
        </div>
    )
}
