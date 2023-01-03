import React, {useState} from 'react';

// Using the spread operator to copy previous array in the setter state function
function HookCounterWithArray()
{
    const [items, setItems] = useState([])
    const addItem = () => setItems([...items, { key: items.length, value: Math.floor(Math.random() * 10) + 1}])
    return (
        <div>
            <button onClick={addItem}>Add item</button>
            <ul>
                {
                    items.map(item => (<li key={item.key}>value={item.value}</li>))
                }
            </ul>
        </div>
    );
}

export default HookCounterWithArray;
