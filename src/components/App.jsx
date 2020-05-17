import React, {useState} from 'react';
import {ToDo} from './ToDo.jsx';

export function App() {
    const inputTask = [{note: 'Something to do', id: 0}, {note: 'Another to do', id: 1}, {note: 'Additional to do', id: 2}];
    const [done, setChecked] = useState(false);
    const handleClick = () => setChecked(!done);
    console.log('inside the app', done);

    return (
        <div>
            {inputTask.map(task =>  <ToDo onClick={handleClick} isChecked={done} task={task}/>)}
        </div>
    )
}
