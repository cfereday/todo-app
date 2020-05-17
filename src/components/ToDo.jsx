import React from 'react';

export const ToDo = ({task: {note, id}, onClick, done}) => {
    return (
        <React.Fragment>
            <label htmlFor={id}>{note}</label>
            <input id={id} type="checkbox" checked={done} onChange={onClick}/>
        </React.Fragment>
    )
};

