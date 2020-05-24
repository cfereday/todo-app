import React from 'react';
import {ToDo} from './ToDo.jsx';

const sampleToDo = {note: 'Number 4', unique: 4, done: false};

export const AddToDoButton = ({doneChanged}) => {
    return (
        <button data-testid={`todo-button`} value="Create new ToDo" onClick={() =>
             <ToDo todo={sampleToDo} doneChanged={doneChanged}/>}
        >
            Add new todo
        </button>
    );
};
