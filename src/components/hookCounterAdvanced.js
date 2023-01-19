import React, {useState} from 'react';

function HookCounterAdvanced(props)
{
    const initialCount = 0
    const [count, setCount] = useState(0)
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount  => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount  => prevCount - 1)}>Decrement</button>
        </div>
    );
}

export default HookCounterAdvanced;
