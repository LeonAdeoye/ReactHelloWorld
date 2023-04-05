import React from 'react';
import {Box} from '@mui/material'
// Used as a replacement of the DIV tag and provide access to theme.
// You can use system properties (with a shorter name) that material UI directly supports . For example, bgcolor, height, m, p, width
// Goto http://mui.com/system/properties
function MuiBox()
{
    // p is padding system property is multiplied by 8px.
    // m is margin system property is multiplied by 8px.
    return (
        <>
            <Box sx={{
                    backgroundColor:'primary.main',
                    color:'white',
                    height: '50px',
                    width: '50px',
                    padding: '16px',
                    '&:hover': { backgroundColor: 'primary.light'}
                }}>Horatio & Harper</Box>
            <Box display='flex' bgcolor='success.light' height='30px' width='60px' m={2} p={2}>Saori & Leon</Box>
            <Box component='span' >Mike & Jo</Box>
        </>
    );
}

export default MuiBox;
