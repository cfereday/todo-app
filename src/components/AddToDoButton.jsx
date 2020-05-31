import React from 'react';

export const AddToDoButton = ({ addToDo }) => {
    return (
        <button data-testid={`new-todo-button`} className="Button" value="Create new ToDo" onClick={addToDo}>
            Add new todo
        </button>
    );
};
