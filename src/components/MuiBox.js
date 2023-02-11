import React from 'react';
import {Box} from '@mui/material'

// Used as replacement of the DIV tag
function MuiBox()
{
    // p is padding system property is multiplied by 8px.
    // m is margin system property is multiplied by 8px.
    return (
        <>
            <Box sx={{
                    backgroundColor:'primary.main',
                    color:'white',
                    height: '150px',
                    width: '150px',
                    padding: '16px',
                    '&:hover': { backgroundColor: 'primary.light'}
                }}>Horatio & Harper
            </Box>
            <Box display='flex' bgcolor='success.light' height='100px' width='200px' m={2} p={2}>Saori & Leon</Box>
            <Box component='span' >Mike & Jo</Box>
        </>
    );
}

export default MuiBox;
