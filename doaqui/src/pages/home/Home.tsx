import React from 'react';
import {Typography, Box, Grid, Button} from '@mui/material';
import './Home.css';
import Banner from '../../components/statics/banner/Banner';
import Fazemos from '../../components/statics/fazemos/Fazemos';
import Contribuir from '../../components/statics/contribuir/Contribuir';
import Footer from '../../components/statics/footer/Footer';
import NavbarIndex from '../../components/statics/navbarIndex/NavbarIndex';
import NavbarErick from '../../components/statics/navbarErick/NavbarErick';

function Home() {
    return (
        <>
            <img id='background' src="https://i.imgur.com/vcW2lYW.png" alt="Back" />
            <NavbarErick />
            <Banner />
            <Fazemos />
            <Contribuir />
            <Footer />
        </>
    );
}

export default Home;

// escreve com efeito de digitação
/*<
    div class="typing-block">
        <h1 class="h1-new typing-effect">
            Fast and Easy
        </h1>
    </div>
 */