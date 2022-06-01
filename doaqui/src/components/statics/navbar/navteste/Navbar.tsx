import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">

                    {/*Logo*/}
                    <Link to='/' className='text-decorator-none'>
                        <Box className='cursor'>
                            <Typography variant="h5" color="inherit">
                                Doaqui
                            </Typography>
                        </Box>
                    </Link>

                    <Box display="flex" justifyContent="start">

                        {/*Botão Home*/}
                        <Link to='/home' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>

                        {/*Botão Como funciona*/}
                        <Link to='/' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Como funciona
                                </Typography>
                            </Box>
                        </Link>

                        {/*Botão Quero doar*/}
                        <Link to='/' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Quero doar
                                </Typography>
                            </Box>
                        </Link>

                        {/*Botão Sobre nós*/}
                        <Link to='/' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Sobre nós
                                </Typography>
                            </Box>
                        </Link>

                        {/*Botão logout*/}
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                        </Link>
                        
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
