import React from 'react';

// Destructured props in personDetails
// Key passed in through the parent as key is not a props. Trying to access it will result in undefined.
// Key props is reserved. Key plays a crucial role in determining which items in a list have changed or have been added or removed for UI updates.
function PersonComponent({personDetails})
{
    return <h3>I am {personDetails.name}, my age is {personDetails.age}, and my skill is {personDetails.skill}.</h3>
}

export default PersonComponent;
