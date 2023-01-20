import React, {useState} from 'react';

// The setter function provided by the useState hook does not automatically merge and update objects.
// You have to manually merge by yourself using the ES6 spread operator ...
// [...name] - copy every property in the name object, and only update the first or last name property.
function HookCounterWithObject()
{
    const [name, setName] = useState({firstName: '', lastName: ''})
    return (
        <form>
            <input type="text" aria-label="firstName" value={name.firstName} onChange={event => setName({...name, firstName: event.target.value})}/>
            <input type="text" aria-label="lastName" value={name.lastName} onChange={event => setName({...name, lastName: event.target.value})}/>
            <h2>First Name: {name.firstName}, and Last Name: {name.lastName}</h2>
            <h2>Object's JSON: {JSON.stringify(name)}</h2>
        </form>
    );
}

export default HookCounterWithObject;
