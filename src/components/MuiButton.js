import {Stack, Button, ToggleButtonGroup, ToggleButton} from '@mui/material'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import {useState} from "react";

const MuiButton = () =>
{
    const [formats, setFormats] = useState([]);
    const [power, setPower] = useState('On');
    console.log(formats);
    console.log(power);
    const handleFormatChange = (event, updateFormats) =>
    {
       setFormats(updateFormats);
    }
    const handlePowerChange = (event, power) =>
    {
        setPower(power);
    }
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                 <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='warning'>Warning</Button>
            </Stack>
            <Stack direction='row'>
                <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange} size='large' color='success'>
                    <ToggleButton value='bold' aria-label="bold">
                        <FormatBoldIcon/>
                    </ToggleButton>
                    <ToggleButton value='italic' aria-label="italic">
                        <FormatItalicIcon/>
                    </ToggleButton>
                    <ToggleButton value='underlined' aria-label="underlined">
                        <FormatUnderlinedIcon/>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <Stack direction='row'>
                <ToggleButtonGroup aria-label="power" value={power} onChange={handlePowerChange} size='small' color='error' exclusive>
                    <ToggleButton value='On' aria-label="bold">
                        On
                    </ToggleButton>
                    <ToggleButton value='Off' aria-label="italic">
                        Off
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}

export default MuiButton;
