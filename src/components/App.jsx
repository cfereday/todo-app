import React, { useState } from 'react';
import { CheckBox } from './Checkbox.jsx';

export function App() {
    const [checked, setChecked] = useState(false);
    const handleClick = () => setChecked(!checked);
    return <CheckBox onClick={handleClick} isChecked={checked}/>
}
