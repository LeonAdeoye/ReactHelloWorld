import React from 'react';

// In React's inline styles are specified using an object whose key is camelCase of the CSS property name
// The fontSize property is camelCase of the CSS property font-size. The value is specified as a string.
const heading = {
    fontSize: '30px',
    color: 'blue'
}

function Inline()
{
    // To apply this style inline we make use of the style attribute which is set the above object heading.
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    );
}

export default Inline;
