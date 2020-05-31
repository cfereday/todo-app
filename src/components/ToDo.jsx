import React, {useState} from 'react';

export const ToDo = ({todo, doneChanged, noteChanged, deleteTodo}) => {
    const [currentNote, updatedNote] = useState(todo.note);
    return (
        <React.Fragment>
            <input data-testid={`todo-checked-${todo.unique}`} name="toDo" type="checkbox" checked={todo.done}
                   onChange={(event) => {
                       const gatheredInfo = {unique: todo.unique, done: event.target.checked};
                       doneChanged(gatheredInfo)
                   }}/>
            <input data-testid={`todo-note-${todo.unique}`} name="task" type="text" value={currentNote}
                   onChange={(event) => {
                       updatedNote(event.target.value);
                   }}/>
            <button data-testid={`todo-save-${todo.unique}`} onClick={(event) => {
                const gatheredInfo = {unique: todo.unique, note: currentNote};
                noteChanged(gatheredInfo);
            }}>Save Note
            </button>
            <button data-testid={`todo-delete-${todo.unique}`} onClick={(event) => {
                deleteTodo(todo.unique);
            }}>Delete Note
            </button>
        </React.Fragment>
    )
};

