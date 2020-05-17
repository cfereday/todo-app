import React, {useState} from 'react';
import {ToDo} from './ToDo.jsx';

export function App() {
    const inputTask = {note: 'Something to do', id: 0};
    const [done, setChecked] = useState(false);
    const handleClick = () => setChecked(!done);
    return <ToDo onClick={handleClick} isChecked={done} task={inputTask}/>
}
