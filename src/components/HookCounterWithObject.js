import React, {useState} from 'react';

function HookCounterWithObject()
{
    const [name, setName] = useState({firstName: '', lastName: ''})
    return (
        <form>
            <input type="text" value={name.firstName} onChange={event => setName({...name, firstName: event.target.value})}/>
            <input type="text" value={name.lastName} onChange={event => setName({...name, lastName: event.target.value})}/>
            <h2>First Name: {name.firstName}, and Last Name: {name.lastName}</h2>
            <h2>Object's JSON: {JSON.stringify(name)}</h2>
        </form>
    );
}

export default HookCounterWithObject;
