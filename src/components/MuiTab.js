import React, {useState} from 'react';
import {Box, Tab} from '@mui/material'
import {TabContext, TabList, TabPanel} from '@mui/lab'
import FavoriteIcon from '@mui/icons-material/Favorite'

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
                    <TabList aria-label='Tabs Example' centered onChange={handleChange} textColor='secondary' indicatorColor='secondary'>
                        <Tab label='Tab One' value='1' icon={<FavoriteIcon/>} iconPosition='start'></Tab>
                        <Tab label='Tab Two' value='2' icon={<FavoriteIcon/>}></Tab>
                        <Tab label='Tab Three' value='3' icon={<FavoriteIcon/>} iconPosition='bottom'></Tab>
                        <Tab label='Tab Four Disabled' disabled value='4'></Tab>
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
