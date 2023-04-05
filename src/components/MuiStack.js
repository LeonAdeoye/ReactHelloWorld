import React from 'react';
import {Box, Stack} from '@mui/material'

function MuiStack() {
    // stack direction can be row, row-reverse, column, column-reverse.
    // system properties like m and p are also supported.
    return (
        <Stack sx={{border: '1px solid'}} direction='column-reverse' spacing={0.25}>
            <Box bgcolor='warning.light' height='50px' width='70px'>Saori & Leon</Box>
            <Box bgcolor='warning.main' height='50px' width='70px'>Harper & Horatio</Box>
        </Stack>
    );
}

export default MuiStack;
