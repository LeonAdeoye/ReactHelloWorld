import React from 'react';

function NameList()
{
    const names = ["Horatio", "Harper", "Saori"]
    // Without a unique key added to h2 tag, you will get a warning: Each child in a list should have a unique "key" prop.
    // If there is no key value, the array function that is passed to the map function receives two parameters:
    // The element value itself and the index of the element in the current iteration.
    // However, insert at the start of the array will shift the elements up and the last element have an undefined/blank values. Sorting is also impacted.
    // Use the default index key if the list is static and will not be reordered.
    return (
        <ul>
            {
                names.map((name, index) => <li key={index}>{name} at {index}</li>)
            }
        </ul>
    );
}

export default NameList;
