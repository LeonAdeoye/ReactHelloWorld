import React, {useState} from 'react';

function HookCounter()
{
    // A hook is a special function that lets you hook into React features. The useState hook lets you add state to react components.
    // The useState hook accept the initial value of the state property and returns the current value of the state property
    // and a method that is capable of updating that state property value. Don't call hooks inside loops, conditions, or nested functions.

    // Array destructuring
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Count:{count}</button>
        </div>
    );
}

export default HookCounter;
