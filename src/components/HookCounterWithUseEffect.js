import React, {useEffect, useState} from 'react';

// When we use the useEffect hook we are requesting React to execute the function passed as an argument to useEffect on every render.
// It runs on the first render and after every subsequent render.
// The useEffect hook is run inside the component to access the state of component.
function HookCounterWithUseEffect()
{
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // In order to conditionally execute an effect, you need to pass in a second dependency array parameter of the useEffect hook method.
    // Within this dependency array, we need to specify either props or state that we need to watch for.
    // Only when these array elements were to change, the effect will be executed.
    // In this case, we only want the document title to change when the count state changes.
    useEffect(() => {
        document.title = `Clicked ${count} times`
    },[count])

    return (
        <div>
            <input type="text" value={name} onChange={(event) => {setName(event.target.value)}}/>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    );
}

export default HookCounterWithUseEffect;
