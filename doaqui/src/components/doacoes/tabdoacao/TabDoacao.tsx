import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import { Box } from "@mui/system";
import ListaPostagem from '../listadoacao/ListaDoacao';
import './TabDoacao.css';
import amber from '@mui/material/colors/amber';


function TabDoacao() {

    const primary = amber[800]; //#ff8f00

    const [value, setValue] = useState('1')

    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }

    return (
        <>
            <div className='largura'>
                <TabContext value={value}>
                    <AppBar position="static">
                        <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                            <Tab label="Todas as doacoes" value="1"/>
                        </Tabs>
                    </AppBar>
                    <TabPanel value="1" >
                        <Box display="flex" flexWrap="wrap" justifyContent="center">
                            <ListaPostagem />
                        </Box>
                    </TabPanel>
                </TabContext>
            </div>
        </>
    );
}
export default TabDoacao;