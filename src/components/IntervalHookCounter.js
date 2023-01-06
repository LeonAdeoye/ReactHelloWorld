import React, {useEffect, useState} from 'react';

function IntervalHookCounter(props)
{
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(count + 1)
    }

    // You can have multiple useEffect hook method calls passing in different methods that render different component effects.
    useEffect(() =>
    {
        function doSomething()
        {
            // Define functions inside useEffect if they have variable that you need access to.
        }
        doSomething()

        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])  // IMPORTANT: The dependency array indicates what React should watch out for. Common mistake to leave out dependency array list

    return (
        <h2>UseEffect Hook Interval Timer: {count}</h2>
    );
}

export default IntervalHookCounter;
