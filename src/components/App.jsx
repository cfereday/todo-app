import React, {useState} from 'react';
import {ToDo} from './ToDo.jsx';

export function App() {
    const [done, setChecked] = useState(false);
    const handleClick = () => setChecked(!done);
    return <ToDo onClick={handleClick} isChecked={done} task={"Something To Do"} id={1}/>
}
