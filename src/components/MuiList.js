import React, {useState} from 'react';
import {Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton, Divider, Tooltip} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

function MuiList()
{
    return (
        <Box sx={{width: '400px', bgcolor: '#efefef'}}>
            <List>
                <ListItem disablePadding>
                    <Tooltip title='Horatio is a good boy!' placement='right-end' arrow enterDelay={500} leaveDelay={200}>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListItemAvatar>
                                    <Avatar>
                                        <MailIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemIcon>
                            <ListItemText primary='Horatio' secondary='Ethan Horatio Adeoye'/>
                        </ListItemButton>
                    </Tooltip>
                </ListItem>
                <Divider/>
                <ListItem disablePadding>
                    <Tooltip title='Harper is a lovely princess!' placement='right-end' arrow enterDelay={500} leaveDelay={200}>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListItemAvatar>
                                    <Avatar>
                                        <MailIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemIcon>
                            <ListItemText primary='Harper' secondary='Chloe Harper Shiori Adeoye'/>
                        </ListItemButton>
                    </Tooltip>
                </ListItem>
                <Divider/>
                <ListItem disablePadding>
                    <Tooltip title='Saori is a beautiful wife!' placement="right" arrow enterDelay={500} leaveDelay={200}>
                        <ListItemButton>
                            <ListItemIcon>
                                <ListItemAvatar>
                                    <Avatar>
                                        <MailIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemIcon>
                            <ListItemText primary='Saori' secondary='Saori Adeoye'/>
                        </ListItemButton>
                    </Tooltip>
                </ListItem>
            </List>
        </Box>
    )
}

export default MuiList;
