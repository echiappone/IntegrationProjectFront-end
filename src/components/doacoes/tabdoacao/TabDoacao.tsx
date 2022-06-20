import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import { Box } from "@mui/system";
import ListaPostagem from '../listadoacao/ListaDoacao';
import './TabDoacao.css';
import amber from '@mui/material/colors/amber';


function TabDoacao() {

    const secondary = amber[800]; //#ff8f00

    const [value, setValue] = useState('1')

    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }

    return (
        <>
            <div id='doacoes'>
                <TabContext value={value}>
                         
                        <h2 id="h2_doacoes">Escolha sua <span id="span-borda-tabdoacao">doação!</span></h2>
                
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