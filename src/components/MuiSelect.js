import {Box, TextField, MenuItem} from '@mui/material'
import {useState} from "react";

const MuiSelect = () =>
{
    const [country, setCountry] = useState('');
    const [cities, setCities] = useState([]);
    const handleCountryChange = (event) =>
    {
        setCountry(event.target.value);
    }

    const handleCitiesChange = (event) =>
    {
        const value = event.target.value;
        setCities(typeof value === 'string' ? value.split(',') : value);
    }
    console.log(country);
    console.log(cities);
    return (
        <Box width='250px'>
            <br></br>
            <TextField label='Select country' select value={country} onChange={handleCountryChange} fullWidth helperText='Please select your country'>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='UK'>United Kingdom</MenuItem>
                <MenuItem value='US'>United States</MenuItem>
            </TextField>
            <br></br>
            <TextField label='Select city' select value={cities} onChange={handleCitiesChange} fullWidth SelectProps={{multiple: true}} helperText='please select your favourite cities'>
                <MenuItem value='LIV'>Liverpool</MenuItem>
                <MenuItem value='HKG'>Hong Kong</MenuItem>
                <MenuItem value='TKY'>Tokyo</MenuItem>
                <MenuItem value='LON'>London</MenuItem>
            </TextField>
        </Box>
    )
}

export default MuiSelect;
