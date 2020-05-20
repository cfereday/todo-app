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
            <input name="toDo" key={id} type="checkbox" checked={isChecked} onChange={(event) => {
                const latestState = handleCheckedBoxChange(event);
                onUserChanges(latestState);
            }}/>
            <textarea value={task} onChange={(event) => {
                const latestState = handleInputchange(event);
                onUserChanges(latestState);
            }}/>
        </React.Fragment>
    )
};

