import {Box, FormControlLabel, Switch} from '@mui/material'
import {useState} from "react";

const MuiSwitch = () =>
{
    const [checked, setChecked] = useState(false);

    const handleChange = (event) =>
    {
        //setChecked(event.target.value == 'true');
    }

    console.log(checked);
    return (
        <Box width='250px'>
            <FormControlLabel control={<Switch checked={checked} onChange={handleChange}/>} label='Dark mode' />
        </Box>
    )
}

export default MuiSwitch;
