import React from 'react';

export const ToDo = ({task, id, isChecked, onUserChanges}) => {
    const handleInputchange = (event) => {
        const target = event.target;

        if (target.value !== 'Example note') {
            task = target.value
        }
        return {note: task, unique: id, done: isChecked}
    };

    const handleCheckedBoxChange = (event) => {
        const target = event.target;
        isChecked = !!target.checked;

        return {note: task, unique: id, done: isChecked}
    };

    return (
        <React.Fragment>
            <input name="toDo" type="checkbox" checked={isChecked} onChange={(event) => {
                onUserChanges(handleCheckedBoxChange(event));
            }}/>
            <input name="task" type="text" onChange={(event) => {
                onUserChanges(handleInputchange(event));
            }}/>
        </React.Fragment>
    )
};

