import React from 'react';

function ChildComponent(props)
{
    // Use the arrow syntax to pass a parameter to the parent method.
    return (
        <div>
           <button onClick={() => props.greetHandler('Horatio')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent;
