import React from 'react';

export const ToDo = ({task, id, isChecked, onUserChanges}) => {

    const handleInputchange = (event) => {
        const target = event.target;

        if (target.value !== 'Example note') {
            task = target.value
        }

        return {task}
    };

    const handleCheckedBoxChange = (event) => {
        const target = event.target;
        isChecked = !!target.checked;

        return {isChecked}
    };

    return (
        <React.Fragment>
            <form>
                <label htmlFor={id}>
                <textarea value={task} onChange={(event) => {
                    const latestState = handleInputchange(event);
                    onUserChanges(latestState);
                }}/>
                    <input name="toDo" key={id} type="checkbox" checked={isChecked} onChange={(event) => {
                        const latestState = handleCheckedBoxChange(event);
                        onUserChanges(latestState);
                    }}/>
                </label>
            </form>
        </React.Fragment>
    )
};

