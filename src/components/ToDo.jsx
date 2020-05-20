import React, {useState} from 'react';

export const ToDo = ({ todo, doneChanged }) => {
    // const [todo, updateTodo] = useState({note: 'Example note', unique: 0, done: false});
    //
    // const handleInputchange = (event) => {
    //     const target = event.target;
    //
    //     if (target.value !== 'Example note') {
    //         todo.note = target.value
    //     }
    //     updateTodo({note: todo.note, unique: todo.unique, done: todo.done})
    // };
    //

    return (
        <React.Fragment>
            <input name="toDo" type="checkbox" checked={todo.done} onChange={(event) => {
                console.log('onchange: checkbox', event);
                const gatheredInfo = { unique: todo.unique, done: event.target.checked }
                doneChanged(gatheredInfo)
            }}/>
            <input name="task" type="text" value={todo.note} onChange={(event) => {
                console.log('onchange: text', event);
                // handleInputchange(event);
                // todo(todo);
            }}/>
        </React.Fragment>
    )
};

