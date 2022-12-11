import React from 'react';
import PersonComponent from "./PersonComponent";

function PersonList()
{
    const persons = [
    {
        name: "Horatio",
        age: 9,
        skill: "Football"
    },
    {
        name: "Harper",
        age: 6,
        skill: "Gymnastics"
    }];

    return persons.map(person => <PersonComponent personDetails={person}/>)
}

export default PersonList;
