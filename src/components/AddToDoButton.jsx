import React from 'react';
import '../styles/Button.css';

export const AddToDoButton = ({ addToDo }) => {
    return (
        <button data-testid={`todo-button`} className="Button" value="Create new ToDo" onClick={addToDo}>
            Add new todo
        </button>
    );
};
