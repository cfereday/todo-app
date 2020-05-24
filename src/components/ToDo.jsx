import React from 'react';

export const ToDo = ({ todo, doneChanged }) => {
    return (
        <React.Fragment>
            <input data-testid={`todo-checked-${todo.unique}`} name="toDo" type="checkbox" checked={todo.done}
                   onChange={(event) => {
                       const gatheredInfo = {unique: todo.unique, done: event.target.checked};
                       doneChanged(gatheredInfo)
                   }}/>
            <input data-testid={`todo-note-${todo.unique}`} name="task" type="text" value={todo.note}
                   onChange={(event) => {
                       const gatheredInfo = {unique: todo.unique, note: event.target.value};
                       doneChanged(gatheredInfo)
                   }}/>
        </React.Fragment>
    )
};

