import React from 'react';

function NameList(props)
{
    const names = ["Horatio", "Harper", "Saori"]
    // Without a unique key added to h2 tag you will get a warning: Each child in a list should have a unique "key" prop.
    return (
        <div>
            {
                names.map(name => <h2 key={name}>{name}</h2>)
            }
        </div>
    );
}

export default NameList;
