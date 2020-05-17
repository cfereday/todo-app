import React from 'react';

export const ToDo = ({task, onClick, id, done}) => {
    return (
        <React.Fragment>
            <label htmlFor={id}>{task}</label>
            <input id={id} type="checkbox" checked={done} onChange={onClick}/>
        </React.Fragment>
    )
};

