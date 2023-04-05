import React, { useState } from 'react';
import {Box} from '@mui/material'

function ColorfulBox() {
    const [color, setColor] = useState('blue'); // default color is primary

    const handleClick = () => {
        console.log("clicked")
        setColor('red'); // change the color to secondary on click
    };

    return (
        <Box
            onClick={handleClick}
            bgcolor={color}
            p={2}
            borderRadius="borderRadius"
            boxShadow={2}
        >
            Click me to change my color!
        </Box>
    );
}

export default ColorfulBox;
