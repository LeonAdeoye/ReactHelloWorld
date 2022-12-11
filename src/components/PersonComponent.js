import React from 'react';

// Destructured props in personDetails
function PersonComponent({personDetails}) {
    return <h3>I am {personDetails.name} and my age is {personDetails.age} and my skill is {personDetails.skill}.</h3>
}

export default PersonComponent;
