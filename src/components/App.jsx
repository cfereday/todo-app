import React, { useState } from 'react';

export function App() {
    const [checked, setChecked] = useState(false);
    const handleClick = () => setChecked(!checked);
    return <input type="checkbox" name="Something to do" onClick={handleClick} checked={checked}/>
}
