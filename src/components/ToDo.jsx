import React from 'react';

export const ToDo = ({ todo, doneChanged, noteChanged }) => {
    let updatedNote;
    return (
        <React.Fragment>
            <input data-testid={`todo-checked-${todo.unique}`} name="toDo" type="checkbox" checked={todo.done}
                   onChange={(event) => {
                       const gatheredInfo = {unique: todo.unique, done: event.target.checked};
                       doneChanged(gatheredInfo)
                   }}/>
            <input data-testid={`todo-note-${todo.unique}`} name="task" type="text"
                   onChange={(event) => {
                       updatedNote = {unique: todo.unique, note: event.target.value};
                   }}/>
            <button data-testid={`todo-save-${todo.unique}`} onClick={(event) => {
                noteChanged(updatedNote);
            }}>Save Note</button>
        </React.Fragment>
    )
};

