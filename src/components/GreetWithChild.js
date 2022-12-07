import React from 'react';

const GreetWithChild = (props) => {
    return (
        /* JSX needs to wrapped in a single div because we can only return one HTML element. */
        /* props are readonly and immutable - once set they cannot be re-assigned */
        <div>

            <h1>Hello {props.name}</h1>
            {props.children}
        </div>);
}

export default GreetWithChild;
