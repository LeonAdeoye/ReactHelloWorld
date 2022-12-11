import React from 'react';

function NameList(props)
{
    const names = ["Horatio", "Harper", "Saori"]
    return (
        <div>
            {
                names.map(name => <h2>{name}</h2>)
            }
        </div>
    );
}

export default NameList;
