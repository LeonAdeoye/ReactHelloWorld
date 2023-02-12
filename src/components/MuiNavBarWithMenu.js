import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem} from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function MuiNavBarWithMenu()
{
    const [anchorElement, setAnchorElement] = useState(null);
    const openFlag = Boolean(anchorElement);
    const handleClick = (event) =>
    {
        setAnchorElement(event.currentTarget);
    }
    const handleClose = () =>
    {
        setAnchorElement(null);
    }
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <CatchingPokemonIcon/>
                </IconButton>
                <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                    Request For Quote
                </Typography>
                <Stack direction='row' spacing='2'>
                    <Button color='inherit'>Features</Button>
                    <Button color='inherit'>Prices</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'
                            id='resources-button'
                            endIcon={<KeyboardArrowDownIcon/>}
                            onClick={handleClick}
                            aria-control={openFlag ? 'resources-menu' : undefined }
                            aria-expanded={openFlag ? 'true' : undefined }>Resources</Button>
                    <Button color='inherit'>Login</Button>
                </Stack>
                <Menu id='resources-menu'
                      anchorEl={anchorElement}
                      open={openFlag}
                      anchorOrigin={{vertical:'bottom', horizontal: 'right'}}
                      transformOrigin={{vertical: 'top', horizontal: 'right'}}
                      MenuListProps={{'aria-labelledby' : 'resources-button'}}
                      onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default MuiNavBarWithMenu;
