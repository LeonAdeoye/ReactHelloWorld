import React from 'react';
import PersonComponent from "./PersonComponent";

function PersonList()
{
    const persons = [
    {
        id: 0,
        name: "Harper",
        age: 6,
        skill: "Gymnastics",
        likes: "sweets"
    },
    {
        id: 1,
        name: "Horatio",
        age: 9,
        skill: "Football",
        likes: "sweets"
    }];

    // You need to provide a unique key property otherwise you will get a warning: Each child in a list should have a unique "key" prop.
    return persons.map(person => <PersonComponent key={person.id} personDetails={person}/>)
}

export default PersonList;
