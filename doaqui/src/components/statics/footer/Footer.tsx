import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@mui/material';
import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    
                    {/*footer box 1 
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-nos no LinkedIn </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.linkedin.com/in/erickchiappone/" target="_blank">
                                <LinkedInIcon className='redes'/>
                            </a>
                            <a href="https://www.linkedin.com/in/naomy-santana-77900a211/" target="_blank">
                                <LinkedInIcon className='redes'/>
                            </a>
                            <a href="https://www.linkedin.com/in/yasmim-cristine-5b803523b/" target="_blank">
                                <LinkedInIcon className='redes'/>
                            </a>
                        </Box>
                    </Box>
                    */}
                        
                    {/*footer box 2 */}
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos'>
                            Todos os direitos reservados ao Grupo 02 Turma 01 .NET FullStack Generation Brasil © 2022</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org" className='a_footer'>
                                <Typography variant="subtitle2" gutterBottom className='textos' align="center">https://brazil.generation.org/</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;