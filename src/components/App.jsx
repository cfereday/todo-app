import React, {useState} from 'react';
import {ToDo} from './ToDo.jsx';

export function App() {
    const todos = [{note: 'Number 1', unique: 1, done: true},{note: 'Number 2', unique: 2, done: true},{note: 'Number 3', unique: 3, done: false}];

    const [currentToDos, updatedToDos] = useState(todos);
    const doneChanged = ({ unique, done, note }) => {
        const changedToDos = currentToDos.map(todo => {
            if (unique === todo.unique) {
                return {... todo, done: done, note: note}
            }
            return todo;
        });

        updatedToDos(changedToDos);
    };

    return (
        <div>
            <h1>To Do</h1>
            <br/>
            { currentToDos.map(todo => <li><ToDo todo={todo} doneChanged={doneChanged}/></li>)}
        </div>
    )
}
