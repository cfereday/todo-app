import React, {useState} from 'react';
import {ToDo} from './ToDo.jsx';
import {AddToDoButton} from './AddToDoButton.jsx';

export function App() {
    const [currentToDos, updatedToDos] = useState([
        {note: 'Number 1', unique: 1, done: true},
        {note: 'Number 2', unique: 2, done: true},
        {note: 'Number 3', unique: 3, done: false}
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

    const addANewToDo = () => {
        const newTodos = [...currentToDos, {note: 'New todo', unique: 4, done: false}];
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
