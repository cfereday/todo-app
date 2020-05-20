import React, {useState} from 'react';
import {ToDo} from './ToDo.jsx';

export function App() {
    const [state, updateState] = useState({note: 'Example note', unique: 0, done: false});
    const createId = () => state.unique + 1;

    return (
        <div>
            <h1>To Do</h1>
            {<ToDo onUserChanges={updateState} isChecked={ state.done } task={state.note} id={createId()}/>}
        </div>
    )
}
