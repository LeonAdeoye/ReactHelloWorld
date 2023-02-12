import React, {useState} from 'react';
import {Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, ListItemButton, Divider} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

function MuiList()
{
    return (
        <Box sx={{width: '400px', bgcolor: '#efefef'}}>
            <List>
                <ListItem disablePadding>
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
                </ListItem>
                <Divider/>
                <ListItem disablePadding>
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
                </ListItem>
                <Divider/>
                <ListItem disablePadding>
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
                </ListItem>
            </List>

        </Box>
    )
}

export default MuiList;
