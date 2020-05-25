import React from 'react';

export const AddToDoButton = ({ addToDo }) => {
    return (
        <button data-testid={`todo-button`} value="Create new ToDo" onClick={addToDo}>
            Add new todo
        </button>
    );
};
