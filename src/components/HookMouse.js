import React, {useEffect, useState} from 'react';

function HookMouse()
{
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (event) => {
        setX(event.clientX)
        setY(event.clientY)
    }

    // We want the useEffect hook to be called only once to add the event listener once on the initial render.
    // To do that we provide an empty dependency array argument - this effect does not depend on any props or state.
    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition)
    },[])

    return (
        <div>X - {x}, Y - {y}</div>
    );
}

export default HookMouse;
