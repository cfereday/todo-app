import React from 'react';

const CheckBox = (props) => {
    return (
        <React.Fragment>
            <label htmlFor="something-to-do">Something To Do</label>
            <input id="something-to-do" type="checkbox" checked={props.checked}/>
        </React.Fragment>
    )
};

module.exports = {
    CheckBox
};

