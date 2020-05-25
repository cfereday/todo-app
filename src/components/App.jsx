import React, {useState} from 'react';
import {ToDo} from './ToDo.jsx';
import {AddToDoButton} from './AddToDoButton.jsx';

export function App() {
    const [currentToDos, updatedToDos] = useState([
        {note: 'An example ToDo', unique: 1, done: false},
        ]);
    const doneChanged = ({unique, done, note}) => {
        const changedToDos = currentToDos.map(todo => {
            if (unique === todo.unique) {
                return {...todo, done: done, note: note}
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
        <div>
            <h1>To Do</h1>
            <br/>
            {<AddToDoButton addToDo={addANewToDo}/>}
            <br/>
            <br/>
            {currentToDos.map(todo => <li><ToDo todo={todo} doneChanged={doneChanged}/></li>)}
        </div>
    )
}
