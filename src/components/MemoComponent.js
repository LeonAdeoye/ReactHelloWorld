import React from 'react';

function MemoComponent({name})
{
    console.log("Memo Component Render")
    return (
        <div>
            <h2>Memo Component: {name}</h2>
        </div>
    );
}
// Only React.memo available in React 16.6 and above.
// React.memo is a higher order component.
export default React.memo(MemoComponent)
