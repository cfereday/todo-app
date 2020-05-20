import React, {useState} from 'react';
import {ToDo} from './ToDo.jsx';

export function App() {
    const [state, updateState] = useState({task: 'Example note', id: 0, done: false});

    return (
        <div>
            {<ToDo onUserChanges={updateState} isChecked={ state.done } task={state.task} id={state.id}/>}
        </div>
    )
}
