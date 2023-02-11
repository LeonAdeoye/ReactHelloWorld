import React from 'react';
import {Grid, Box} from '@mui/material'

function MuiGrid()
{
    // Grid consist of 12 columns
    // Each item in a grid can take up one or more columns as its width
    // There are 5 device sizes (breakpoints) which can be combined together for different devices: xs for mobile devices, sm for tablets, md for desktop, lg and xl for larger monitors.
    // We can assign integer values to each of the device sizes which indicates how many of the 12 available columns are occupied by that item
    return (
        <Grid container my={4} rowSpacing={1} columnSpacing={3}>
            <Grid item xs={3} sm={1}>
                <Box bgcolor='primary.light' p={2}>Item 1</Box>
            </Grid>
            <Grid item xs={9} sm={11}>
                <Box bgcolor='primary.main' p={2}>Item 2</Box>
            </Grid>
            <Grid item xs={9} sm={3}>
                <Box bgcolor='primary.light' p={2}>Item 3</Box>
            </Grid>
            <Grid item xs={3} sm={9}>
                <Box bgcolor='primary.main' p={2}>Item 4</Box>
            </Grid>
        </Grid>
    );
}

export default MuiGrid;
