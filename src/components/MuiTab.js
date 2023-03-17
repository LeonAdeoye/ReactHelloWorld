import React, {useState} from 'react';
import {Box, Tab} from '@mui/material'
import {TabContext, TabList, TabPanel} from '@mui/lab'

function MuiTab()
{
    const [tabValue, setTabValue] = useState('1')
    const handleChange = (event, newValue) =>
    {
        setTabValue(newValue);
    }
    return (
        <Box>
            <TabContext value={tabValue}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                    <TabList aria-label='Tabs Example' onChange={handleChange}>
                        <Tab label='Tab One' value='1'></Tab>
                        <Tab label='Tab Two' value='2'></Tab>
                        <Tab label='Tab Three' value='3'></Tab>
                    </TabList>
                </Box>
                <TabPanel value='1'>Panel One</TabPanel>
                <TabPanel value='2'>Panel Two</TabPanel>
                <TabPanel value='3'>Panel Three</TabPanel>
            </TabContext>
        </Box>
    );
}

export default MuiTab;
