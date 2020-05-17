import React from 'react';

export const CheckBox = (props) => {
    return (
        <React.Fragment>
            <label htmlFor="something-to-do">Something To Do</label>
            <input id="something-to-do" type="checkbox" checked={props.isChecked} onChange={props.onClick}/>
        </React.Fragment>
    )
};

