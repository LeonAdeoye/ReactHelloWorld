import {Stack, TextField} from '@mui/material'
import {useState} from "react";

const MuiTextField = () =>
{
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <TextField label='Name' variant='filled'/>
                <TextField label='Name' variant='standard'/>
                <TextField label='Name' variant='outlined'/>
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField label='Small secondary' size='small' color='secondary'/>
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField label='Mandatory field' required/>
                <TextField label='Password' type='password' helperText='Do not share password with anyone'/>
                <TextField label='Read Only' InputProps={{readOnly: true}}/>
            </Stack>
        </Stack>
    )
}

export default MuiTextField;
