import React from 'react';

export const ToDo = ({task: {note, id}, onClick, isChecked}) => {
    console.log('inside the todo', isChecked);
    return (
        <React.Fragment>
            <label htmlFor={id}>{note}</label>
            <input id={id} type="checkbox" checked={isChecked} onChange={onClick}/>
        </React.Fragment>
    )
};

